import os
import re

CATEGORIES_FILE = "src/data/categories.ts"
BASE_FOLDER = "src/assets/imagenes"


def extract_slugs():
    with open(CATEGORIES_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    category_blocks = re.findall(
        r"\{[^{}]*slug:\s*\"([^\"]+)\"[^{}]*subsections:\s*\[(.*?)\]",
        content,
        re.DOTALL
    )

    categories = []

    for cat_slug, subs in category_blocks:
        sub_slugs = re.findall(r"slug:\s*\"([^\"]+)\"", subs)

        categories.append({
            "category": cat_slug,
            "subs": sub_slugs
        })

    return categories


def create_folders():
    data = extract_slugs()

    for cat in data:
        category = cat["category"]

        for sub in cat["subs"]:
            path = os.path.join(BASE_FOLDER, category, sub)
            os.makedirs(path, exist_ok=True)
            print("Created:", path)


if __name__ == "__main__":
    create_folders()