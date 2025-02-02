import Link from "next/link";
import { Article } from "@/utils/types";

interface ArticleProps {
  article: Article;
}

export default function ArticleItem({ article }: ArticleProps) {
  return (
    <div
      className="w-full my-1 p-5 border-2 border-gray-400 rounded-lg shadow-lg hover:bg-slate-200 md:w-2/5 lg:w-1/4"
    >
      <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{article?.title}</h3>
      <p className="my-2 p-1 text-xl text-gray-700 line-clamp-1">
        {article?.body}
      </p>
      <Link
        href={`/articles/${article?.id}`}
        className="w-full p-1 bg-purple-700 text-xl block text-white rounded-lg text-center hover:bg-purple-700"
      >
        Read More
      </Link>
    </div>
  );
}
