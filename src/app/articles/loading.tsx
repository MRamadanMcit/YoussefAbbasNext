import { Article } from "@/utils/types";

export default async function ArticleLoading() {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 100 },
    });
    const articleSkeleton: Article[] = await res.json();

  return (
    <section className="animate-pulse">
      <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-8">
        {articleSkeleton.map((skeleton) => (
          <div
            key={skeleton?.id}
            className="w-full my-2 p-5 bg-gray-200 rounded-lg md:w-2/5 lg:w-1/4"
          >
            <div className="h-6 bg-gray-300" />
            <div className="h-5 my-3 p-1 bg-gray-300" />
            <div className="w-full h-10 p-1 bg-gray-300 block rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}
