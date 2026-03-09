import { useParams } from "react-router-dom";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import CollageCard from "@/components/CollageCard";
import { getSubsection } from "@/data/categories";
import { loadImages } from "@/lib/loadImages";

const SubsectionPage = () => {
  const { categorySlug, subsectionSlug } = useParams<{
    categorySlug: string;
    subsectionSlug: string;
  }>();

  const data = getSubsection(categorySlug || "", subsectionSlug || "");
  if (!data) return null;

  const { category, subsection } = data;
  const otherSubs = category.subsections.filter((s) => s.slug !== subsection.slug);

  // carga imágenes reales desde src/assets/imagenes/<category>/<subsection>
  const images = loadImages(category.slug, subsection.slug);

  // infinite scroll state
  const [visible, setVisible] = useState(10);
  const loadMore = () => setVisible((v) => v + 10);

  return (
    <Layout>
      {/* SEO title */}
      <title>{subsection.metaTitle}</title>
      <meta name="description" content={subsection.metaDescription} />

      <section className="mx-auto max-w-3xl px-4 pt-12 pb-4">
        <h1 className="text-3xl font-bold text-foreground">
          {category.h1} {subsection.label}
        </h1>
        <p className="mt-2 text-muted-foreground">{subsection.description}</p>
      </section>

      {/* Image feed with infinite scroll */}
      <div className="mx-auto max-w-3xl px-4 py-6">
        <InfiniteScroll
          dataLength={visible}
          next={loadMore}
          hasMore={visible < images.length}
          loader={<p className="text-center py-4">Loading...</p>}
        >
          <div className="space-y-4">
            {images.slice(0, visible).map((src, i) => (
              <div key={i}>
                {i === 5 && (
                  <div className="pb-4">
                    <CTABlock />
                  </div>
                )}
                <div className="overflow-hidden rounded-2xl bg-primary">
                  <img
                    src={src}
                    alt={`${subsection.label} ${category.label} ideas aesthetic ${i + 1} Pinterest inspo`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>

      {/* More Inspo */}
      {otherSubs.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Más {category.label}
          </h2>
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {otherSubs.map((sub) => (
              <CollageCard
                key={sub.slug}
                label={sub.label}
                to={`/${category.slug}/${sub.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      <div className="px-4">
        <CTABlock />
      </div>
    </Layout>
  );
};

export default SubsectionPage;