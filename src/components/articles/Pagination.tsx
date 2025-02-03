export default function Pagination() {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="mt-2 mb-10 flex items-center justify-center">
      <div className="px-3 py-4 text-gray-700 text-xl border border-gray-700 font-bold cursor-pointer transition hover:bg-gray-200">
        Prev
      </div>
      {pages.map((page) => (
        <div
          key={page}
          className="px-3 py-4 text-gray-700 text-xl border border-gray-700 font-bold cursor-pointer transition hover:bg-gray-200"
        >
          {page}
        </div>
      ))}
      <div className="px-3 py-4 text-gray-700 text-xl border border-gray-700 font-bold cursor-pointer transition hover:bg-gray-200">
        Next
      </div>
    </div>
  );
}
