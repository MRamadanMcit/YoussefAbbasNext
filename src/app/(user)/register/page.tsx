import RegisterForm from "@/components/Register";

export default function RegisterPage() {
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center h-full">
      <div className="w-full m-auto p-5 bg-white rounded-lg md:w-2/3">
        <h1 className="mb-5 text-gray-800 text-3xl font-bold">Create New Account</h1>
        <RegisterForm />
      </div>
    </section>
  );
}
