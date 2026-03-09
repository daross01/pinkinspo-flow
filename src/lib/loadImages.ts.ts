export function loadImages(category: string, subsection: string) {

  const modules = import.meta.glob(
    "../assets/imagenes/*/*/*.webp",
    { eager: true }
  );

  const images: string[] = [];

  for (const path in modules) {

    if (path.includes(`/${category}/${subsection}/`)) {
      const mod = modules[path] as any;
      images.push(mod.default);
    }

  }

  return images;
}