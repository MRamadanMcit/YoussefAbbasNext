const articleSkeleton = [1, 2, 3, 4, 5, 6];

export default async function ArticleLoading() {
  return (
    <section className="animate-pulse p-6">
      <div className="w-full h-12 m-auto my-5 bg-gray-300 md:w-2/3" />
      <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-8">
        {articleSkeleton.map((skeleton) => (
          <div
            key={skeleton}
            className="w-full my-2 p-5 bg-gray-200 rounded-lg md:w-2/5 lg:w-1/4"
          >
            <div className="h-6 bg-gray-300" />
            <div className="h-5 my-3 p-1 bg-gray-300" />
            <div className="w-full h-10 p-1 bg-gray-300 block rounded-lg" />
          </div>
        ))}
      </div>
      <div className="w-full h-12 mx-auto mt-4 mb-10 bg-gray-300 md:w-2/4 lg:w-1/4" />
    </section>
  );
}
