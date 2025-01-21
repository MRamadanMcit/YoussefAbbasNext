import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

export default function AdminSideBar() {
  return (
    <>
      <Link
        href="/admin"
        className="text-lg font-semibold flex items-center justify-center lg:text-2xl lg:justify-start"
      >
        <CgMenuGridR className="text-3xl me-1" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>
      <ul className="mt-10 flex flex-col items-center justify-center lg:items-start">
        <Link
          href="/admin/articles-table"
          className="mb-5 text-xl border-gray-300 flex items-center transition hover:border-yellow-200 hover:text-yellow-200 lg:border-b"
        >
          <MdOutlineArticle className="me-1" />
          <span className="hidden lg:block">Articles</span>
        </Link>
        <Link
          href="/admin/comments-table"
          className="mb-5 text-xl border-gray-300 flex items-center transition hover:border-yellow-200 hover:text-yellow-200 lg:border-b"
        >
          <FaRegComment className="me-1" />
          <span className="hidden lg:block">Comments</span>
        </Link>
      </ul>
    </>
  );
}
