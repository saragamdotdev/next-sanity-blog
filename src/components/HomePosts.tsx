import React from "react";
import { getPosts, getTutorials } from "../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

const HomePosts = async () => {
  const tutorials = await getPosts();

  return (
    <div className="mb-16">
      <h2 className="text-3xl mt-0 mb-6 text-gray-50 font-bold">Posts</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tutorials.map((item) => (
          <div key={item._id} className="border border-gray-600 p-2 rounded-md">
            <Image
              src={item.image}
              width={400}
              height={300}
              alt={item.name}
              className="h-52 w-full object-cover m-0 mx-auto"
              priority
            />
            <Link href={`/posts/${item.slug}`} className="no-underline">
              <h3 className="text-lg hover:text-gray-400 m-0 my-2">
                {item.name}
              </h3>
            </Link>

            <p className="leading-normal m-0 mt-2">
              {`${item.intro.slice(0, 200)}...`}{" "}
              <span className="hover:underline text-gray-500">
                <Link
                  href={`/posts/${item.slug}`}
                  className="no-underline text-gray-500"
                >
                  Read more
                </Link>
              </span>{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePosts;
