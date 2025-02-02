import type { Metadata } from "next";

import { Article } from "@/utils/types";
import ArticleItem from "@/components/articles/articleItem";

export default async function ArticlesPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 100 },
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  const articles: Article[] = await res.json();

  return (
    <section className="m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map((article) => (
          <ArticleItem article={article} key={article?.id} />
        ))}
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Article Page",
  description: "Articles about programming",
};
