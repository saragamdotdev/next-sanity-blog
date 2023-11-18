import { PortableTextBlock } from "sanity";

type TutMetaType = {
  _id: string;
  _createdAt: Date;
  name: string;
  intro: string;
  slug: string;
};

type PostMetaType = {
  _id: string;
  _createdAt: Date;
  name: string;
  intro: string;
  slug: string;
  image: string;
};

type TutType = {
  _id: string;
  _createdAt: Date;
  name: string;
  intro: string;
  slug: string;
  content: PortableTextBlock[];
};

type PostType = {
  _id: string;
  _createdAt: Date;
  name: string;
  intro: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};

type PageType = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
