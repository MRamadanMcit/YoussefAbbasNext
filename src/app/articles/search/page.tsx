interface SearchArticleProps {
  searchParams: Promise<{ searchText: string }>;
}

export default async function SearchArticlePage({
  searchParams,
}: SearchArticleProps) {
  return (
    <section className="fix-height container m-auto px-5">
      <h1 className="text-2xl font-bold">Search text is : {(await searchParams).searchText}</h1>
    </section>
  );
}
