import re

DOMAIN = "https://tu-dominio.com"
CATEGORIES_FILE = "src/data/categories.ts"
OUTPUT = "public/sitemap.xml"


def get_urls():
    with open(CATEGORIES_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = re.findall(
        r"\{[^{}]*slug:\s*\"([^\"]+)\"[^{}]*subsections:\s*\[(.*?)\]",
        content,
        re.DOTALL
    )

    urls = []

    for cat, subs in blocks:
        sub_slugs = re.findall(r"slug:\s*\"([^\"]+)\"", subs)

        for sub in sub_slugs:
            urls.append(f"{DOMAIN}/{cat}/{sub}")

    return urls


def generate():
    urls = get_urls()

    xml = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

    for url in urls:
        xml.append("<url>")
        xml.append(f"<loc>{url}</loc>")
        xml.append("</url>")

    xml.append("</urlset>")

    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write("\n".join(xml))


if __name__ == "__main__":
    generate()