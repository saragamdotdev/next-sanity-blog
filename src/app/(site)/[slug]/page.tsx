import { PortableText } from "@portabletext/react";
import { getPage, getPages } from "../../../../sanity/sanity-utils";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const pages = await getPages();

  if (!pages) return [];

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const page = await getPage(slug);

  if (!page) {
    return {
      title: "Not found",
      description: "This page does not exist",
    };
  }

  return {
    title: `${page.title} - Next-Sanity-Blog`,
  };
}

export default async function Page({ params: { slug } }: Props) {
  const page = await getPage(slug);

  if (!page) notFound();

  const newTitle = page.title === "About" ? "Nextjs with Sanity.io" : "Contact";

  return (
    <main>
      <div className="mb-16 mt-10 container mx-auto px-3 md:px-10 lg:px-20">
        <h2 className="text-center">{newTitle}</h2>
        {page.title === "About" && (
          <div className="w-full">
            <Image
              src="/images/hero_image.jpg"
              width={500}
              height={300}
              alt="about sanity"
              className="mx-auto"
              priority
            />
          </div>
        )}
        <div className="mt-10">
          <PortableText value={page.content} />
        </div>
      </div>
    </main>
  );
}
