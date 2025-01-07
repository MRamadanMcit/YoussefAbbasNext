import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="m-auto">
      <h1 className="p-5 text-gray-800 text-3xl font-bold">About Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni porro
        saepe, esse placeat consequuntur minus dolorem, unde quam natus possimus
        sit, accusantium veniam deserunt tempore nesciunt neque facilis non
        laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus perspiciatis animi voluptate architecto provident et, nulla
        modi nostrum cumque labore, iusto ab voluptatem excepturi quis odio
        suscipit! Aspernatur, libero est.
      </p>
      <div>
        <Image
          src="/images/cloud-hosting.png"
          alt="cloud image"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
}
