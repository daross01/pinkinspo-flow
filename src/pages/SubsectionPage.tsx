import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import CollageCard from "@/components/CollageCard";
import { getSubsection } from "@/data/categories";

const placeholderImages = Array.from({ length: 20 }, (_, i) => {
  const ids = [
    "1604654894610-df63bc536371",
    "1519014816548-bf5fe059798b",
    "1522337360788-8b13dee7a37e",
    "1507003211169-0a1dd7228f2d",
    "1487412720507-e7ab37603c6f",
    "1494790108377-be9c29b29330",
    "1529626455594-4ff0802cfb7e",
    "1524504388940-b1c1722653e1",
    "1534528741775-53994a69daeb",
    "1517841905240-472988babdf9",
  ];
  return `https://images.unsplash.com/photo-${ids[i % ids.length]}?w=600&h=800&fit=crop&auto=format`;
});

const SubsectionPage = () => {
  const { categorySlug, subsectionSlug } = useParams<{
    categorySlug: string;
    subsectionSlug: string;
  }>();

  const data = getSubsection(categorySlug || "", subsectionSlug || "");
  if (!data) return null;

  const { category, subsection } = data;
  const otherSubs = category.subsections.filter((s) => s.slug !== subsection.slug);

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

      {/* Image feed */}
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-6">
        {placeholderImages.map((src, i) => (
          <div key={i}>
            {i === 5 && (
              <div className="pb-4">
                <CTABlock />
              </div>
            )}
            <div className="overflow-hidden rounded-2xl bg-primary">
              <img
                src={src}
                alt={`${category.label} ${subsection.label} inspo ${i + 1}`}
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* More Inspo */}
      {otherSubs.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Más {category.label}
          </h2>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
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
