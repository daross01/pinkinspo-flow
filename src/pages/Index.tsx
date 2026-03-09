import Layout from "@/components/Layout";
import CategoryCarousel from "@/components/CategoryCarousel";
import CTABlock from "@/components/CTABlock";
import { categories } from "@/data/categories";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Your daily dose of aesthetic inspo ✨
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Nails, outfits & hairstyles curated for Pinterest lovers.
      </p>
    </section>

    {/* Category Carousels */}
    {categories.map((cat) => (
      <CategoryCarousel key={cat.slug} category={cat} />
    ))}

    {/* Final CTA */}
    <div className="px-4">
      <CTABlock />
    </div>
  </Layout>
);

export default Index;
