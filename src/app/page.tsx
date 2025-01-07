import Hero from "@/components/home";
import WebHostingPlan from "@/components/home/webHostingPlan";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <h2 className="mt-10 text-3xl font-bld text-center">
        Choose Your Web Hosting Plan
      </h2>
      <div className="m-auto my-7 flex items-center justify-center flex-wrap md:gap-7">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </div>
  );
}
