import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import CategoryCarousel from "@/components/CategoryCarousel";
import CTABlock from "@/components/CTABlock";
import { getCategoryBySlug } from "@/data/categories";

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug || "");

  if (!category) return null;

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-4">
        <h1 className="text-3xl font-bold text-foreground">{category.h1}</h1>
        <p className="mt-2 text-muted-foreground">{category.intro}</p>
      </section>

      <CategoryCarousel category={category} />

      <div className="px-4">
        <CTABlock />
      </div>
    </Layout>
  );
};

export default CategoryPage;
