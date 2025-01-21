import AddArticleForm from "@/components/admin/addArticleForm";

export default function AdminPage() {
  return (
    <div className="fix-height px-5 flex items-center justify-center lg:px-20">
      <div className="w-full p-4 bg-purple-200 rounded shadow">
        <h2 className="mb-4 text-xl text-gray-700 font-semibold lg:text-2xl">
          Add New Article
        </h2>
        <AddArticleForm />
      </div>
    </div>
  );
}
