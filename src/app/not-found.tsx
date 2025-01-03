import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-gray-800 text-7xl font-bold">404</h1>
      <p className="mt-2 mb-5 text-gray-500 text-3xl">Page Not Found</p>
      <Link href="/" className="text-blue-700 text-xl underline">
        Go to home page
      </Link>
    </section>
  );
}
