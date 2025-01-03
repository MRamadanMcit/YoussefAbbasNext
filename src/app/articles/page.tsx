import ArticleItem from "@/components/articles/articleItem";
import { Article } from "@/utils/types";

const ArticlesPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
};

export default ArticlesPage;
