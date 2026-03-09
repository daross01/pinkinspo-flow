export type Subsection = {
  slug: string;
  label: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
};

export type Category = {
  slug: string;
  label: string;
  h1: string;
  intro: string;
  metaTitle: string;
  subsections: Subsection[];
};

export const categories: Category[] = [
  {
    slug: "inspo-unas",
    label: "Inspo Uñas",
    h1: "Inspo Uñas",
    intro: "Las uñas más aesthetic de internet. Diseños para cada ocasión, curados especialmente para ti.",
    metaTitle: "Inspo Uñas Aesthetic | Pinkinspo",
    subsections: [
      {
        slug: "san-valentin",
        label: "San Valentín",
        description: "Romantic, pink and cute nail ideas perfect for Valentine's Day. Save your favorites and get inspired.",
        metaTitle: "Inspo Uñas San Valentín Aesthetic | Pinkinspo",
        metaDescription: "Romantic and aesthetic Valentine's Day nail ideas.",
      },
      {
        slug: "primavera",
        label: "Primavera",
        description: "Fresh, floral and colorful nail designs for spring. Light pastels and nature-inspired aesthetics.",
        metaTitle: "Inspo Uñas Primavera Aesthetic | Pinkinspo",
        metaDescription: "Fresh and aesthetic spring nail ideas.",
      },
    ],
  },
  {
    slug: "inspo-outfits",
    label: "Inspo Outfits",
    h1: "Inspo Outfits",
    intro: "Outfits aesthetic para cada momento. Combinaciones que puedes recrear fácilmente.",
    metaTitle: "Inspo Outfits Aesthetic | Pinkinspo",
    subsections: [
      {
        slug: "san-valentin",
        label: "San Valentín",
        description: "Romantic outfit ideas for Valentine's Day. Soft pinks, reds, and elegant combinations.",
        metaTitle: "Inspo Outfits San Valentín Aesthetic | Pinkinspo",
        metaDescription: "Romantic and aesthetic Valentine's Day outfit ideas.",
      },
      {
        slug: "primavera",
        label: "Primavera",
        description: "Light, fresh and floral outfit ideas for spring. Pastel tones and breezy styles.",
        metaTitle: "Inspo Outfits Primavera Aesthetic | Pinkinspo",
        metaDescription: "Fresh and aesthetic spring outfit ideas.",
      },
    ],
  },
  {
    slug: "inspo-peinados",
    label: "Inspo Peinados",
    h1: "Inspo Peinados",
    intro: "Peinados aesthetic que puedes hacer tú misma. Desde lo más simple hasta lo más elaborado.",
    metaTitle: "Inspo Peinados Aesthetic | Pinkinspo",
    subsections: [
      {
        slug: "san-valentin",
        label: "San Valentín",
        description: "Romantic hairstyle ideas for Valentine's Day. Soft waves, braids and elegant updos.",
        metaTitle: "Inspo Peinados San Valentín Aesthetic | Pinkinspo",
        metaDescription: "Romantic and aesthetic Valentine's Day hairstyle ideas.",
      },
      {
        slug: "primavera",
        label: "Primavera",
        description: "Fresh, natural hairstyles for spring. Floral accents, loose waves, and effortless looks.",
        metaTitle: "Inspo Peinados Primavera Aesthetic | Pinkinspo",
        metaDescription: "Fresh and aesthetic spring hairstyle ideas.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getSubsection(categorySlug: string, subsectionSlug: string) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return null;
  const sub = cat.subsections.find((s) => s.slug === subsectionSlug);
  if (!sub) return null;
  return { category: cat, subsection: sub };
}
