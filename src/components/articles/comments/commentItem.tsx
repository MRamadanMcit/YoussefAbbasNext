import { FaEdit, FaTrash } from "react-icons/fa";

export default function CommentItem() {
  return (
    <div className="mb-5 p-3 bg-gray-200 border-2 border-gray-300 rounded-lg ">
      <div className="mb-2 flex items-center justify-between">
        <strong className="text-gray-800 uppercase">Mohamed</strong>
        <span className="px-1 bg-yellow-700 text-white rounded-lg">
          1/1/2025
        </span>
      </div>
      <p className="mb-2 text-gray-800">Thanks for this article</p>
      <div className="flex items-center justify-end">
        <FaEdit className="me-3 text-green-600 text-xl cursor-pointer" />
        <FaTrash className="text-red-600 text-xl cursor-pointer" />
      </div>
    </div>
  );
}
