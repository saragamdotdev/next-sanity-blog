import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="my-10">
      <section className="text-gray-300 container mx-auto">
        <div className="lg:flex gap-4">
          <div className="flex gap-4 flex-col justify-between lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-300">
              Creating Blog with Nextjs and Sanityio
            </h1>
            <div className="mx-auto lg:hidden">
              <Image
                width={500}
                height={500}
                className="object-cover object-center rounded m-0"
                alt="hero"
                src="/images/hero_image.jpg"
                priority
              />
            </div>
            <p className="leading-relaxed">
              Next.js, with its robust capabilities in server-side rendering and
              client-side navigation, seamlessly integrates with Sanity.io,
              unlocking a realm of possibilities. Together, they enable the
              creation of custom schemas, real-time collaborative editing,
              dynamic content rendering, SEO optimization scalability, and
              performance, revolutionizing content creation with unparalleled
              efficiency and flexibility.
            </p>
          </div>

          <div className="mx-auto hidden lg:block">
            <Image
              width={500}
              height={500}
              className="object-cover object-center rounded m-0"
              alt="hero"
              src="/images/hero_image.jpg"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
