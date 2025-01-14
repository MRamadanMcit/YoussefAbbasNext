import { Article } from "@/utils/types";

interface ArticleProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: ArticleProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${(await params).id}`
  );
  if (!res.ok) throw new Error("Failed to fetch article");
  const article: Article = await res.json();

  return (
    <section className="w-full m-auto px-5 pt-8 md:w-3/4">
      <div className="p-7 bg-white rounded-lg">
        <h1 className="mb-2 text-gray-700 text-3xl font-bold">
          {article?.title}
        </h1>
        <div className="text-gray-400">1/1/2025</div>
        <p className="mt-5 text-gray-800 text-xl">{article?.body}</p>
      </div>
    </section>
  );
}
