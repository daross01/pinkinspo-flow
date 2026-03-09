import CollageCard from "./CollageCard";
import type { Category } from "@/data/categories";

interface CategoryCarouselProps {
  category: Category;
}

const CategoryCarousel = ({ category }: CategoryCarouselProps) => (
  <section className="mx-auto max-w-3xl px-4 py-8">
    <h2 className="mb-4 text-2xl font-bold text-foreground">{category.label}</h2>
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none" style={{ scrollbarWidth: "none" }}>
      {category.subsections.map((sub) => (
        <CollageCard
          key={sub.slug}
          label={sub.label}
          to={`/${category.slug}/${sub.slug}`}
        />
      ))}
    </div>
  </section>
);

export default CategoryCarousel;
