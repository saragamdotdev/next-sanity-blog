import React from "react";
import { getTutorial, getTutorials } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const tutorials = await getTutorials();

  if (!tutorials) return [];

  return tutorials.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const tutorial = await getTutorial(slug);

  if (!tutorial) {
    return {
      title: "Not found",
      description: "This tutorial does not exist",
    };
  }

  return {
    title: tutorial.name,
    description: tutorial.intro,
  };
}

const TutorialPage = async ({ params: { slug } }: Props) => {
  const tutorial = await getTutorial(slug);

  if (!tutorial) notFound();

  return (
    <main>
      <div className="mb-16 mt-10 container mx-auto px-3 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-3xl font-semibold mt-0 mb-12">
          {tutorial.name}
        </h2>
        <PortableText value={tutorial.content} />
      </div>
    </main>
  );
};

export default TutorialPage;
