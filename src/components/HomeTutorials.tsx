import React from "react";
import { getTutorials } from "../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

const HomeTutorials = async () => {
  const tutorials = await getTutorials();

  return (
    <div className="my-10">
      <h2 className="text-3xl my-6 text-gray-50 font-bold">Tutorials</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tutorials.map((item) => (
          <div key={item._id} className="border border-gray-600 p-2 rounded-md">
            <Link href={`/tutorials/${item.slug}`} className="no-underline">
              <h3 className="text-lg hover:text-gray-400 m-0">{item.name}</h3>
            </Link>
            <p className="leading-normal mt-2">
              {`${item.intro.slice(0, 150)}...`}{" "}
              <span className="hover:underline text-gray-500">
                <Link
                  href={`/tutorials/${item.slug}`}
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

export default HomeTutorials;
