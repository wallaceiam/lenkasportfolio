import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_portfolio");

export type PortfolioType = {
  slug: string;
  title: string;
  lead?: string;
  date: Date;

  content?: string;
};

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getPostBySlug = (
  slug: string,
  fields: string[] = ["slug", "title", "date"]
): PortfolioType => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items.slug = realSlug;
    }
    if (field === "content") {
      items.content = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as PortfolioType;
};

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
