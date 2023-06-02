import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import path from "node:path";
import fs from "node:fs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const getPost = async (slug: string) => {
  const fullPath = path.join(
    process.cwd(),
    "content",
    "posts",
    `${slug as string}.md`
  );
  const existPost = fs.existsSync(fullPath);

  if (!existPost) return null;

  const result = matter(fs.readFileSync(fullPath, "utf-8"));
  const processedContent = await remark().use(html).process(result.content);
  const contentHtml = processedContent.toString();

  return {
    content: contentHtml,
    data: {
      title: result.data.title,
      description: result.data.description,
      slug,
    },
  };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <>
      <div
        className="container mt-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const fullPath = path.join(
    process.cwd(),
    "content",
    "posts",
    `${slug as string}.md`
  );
  const existPost = fs.existsSync(fullPath);

  if (!existPost) return {};

  const result = matter(fs.readFileSync(fullPath, "utf-8"));

  return {
    title: result.data.title + " | " + "DesodorantesPro",
    description: result.data.description,
  };
}
