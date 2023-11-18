import React from "react";
import { getPost, getPosts } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getPosts();

  if (!posts) return [];

  return posts.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Not found",
      description: "This post does not exist",
    };
  }

  return {
    title: post.name,
    description: post.intro,
  };
}

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);

  if (!post) notFound();

  function getFormattedDate(dateString: Date): string {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
      new Date(dateString)
    );
  }

  const date = getFormattedDate(post._createdAt);

  return (
    <main>
      <div className="mb-16 mt-10 container mx-auto px-3 md:px-10 lg:px-20">
        <div className="mb-10">
          <h2 className="text-xl md:text-3xl font-semibold mt-0 mb-2">
            {post.name}
          </h2>
          <p className="text-sm">{date}</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={post.image}
            width={400}
            height={300}
            alt={post.name}
            className="h-56 object-cover m-0"
            priority
          />
        </div>
        <PortableText value={post.content} />
      </div>
    </main>
  );
};

export default PostPage;
