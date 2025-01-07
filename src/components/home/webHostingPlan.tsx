import { TiTick } from "react-icons/ti";

export default function WebHostingPlan() {
  return (
    <div className="w-3/4 mb-7 p-4 bg-gray-200 rounded flex flex-col items-center justify-center md:w-2/4 lg:w-1/4">
      <h3 className="text-purple-900 text-3xl font-bold">Premium</h3>
      <strong className="my-5 text-gray-900 text-3xl font-bold">
        $4.99/mo
      </strong>
      <span className="px-2 py-1 bg-red-200 text-red-900 font-semibold rounded-full">
        10% OFF
      </span>
      <div className="mt-6">
        <h5 className="mb-1 text-2xl text-purple-700 font-semibold">
          Top Features
        </h5>
        <div className="mb-1 ps-3 text-green-700 flex items-center">
          <TiTick /> 100 Websites
        </div>
        <div className="mb-1 ps-3 text-green-700 flex items-center">
          <TiTick /> 100 GB SSD Storage
        </div>
        <div className="mb-1 ps-3 text-green-700 flex items-center">
          <TiTick /> Weekly Backups
        </div>
        <div className="mb-1 ps-3 text-green-700 flex items-center">
          <TiTick /> Unlimited Bandwidth
        </div>
        <div className="mb-1 ps-3 text-green-700 flex items-center">
          <TiTick /> Free SLL
        </div>
        <div className="mb-1 ps-3 text-green-700 flex items-center">
          <TiTick /> Free Email
        </div>
      </div>
      <button className="w-full mt-4 p-1 text-gray-900 text-2xl font-bold border-2 border-gray-900 rounded-full transition hover:bg-gray-900 hover:text-white">
        BUY NOW
      </button>
    </div>
  );
}
