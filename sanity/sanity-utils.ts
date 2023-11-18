import { createClient, groq } from "next-sanity";
import {
  PageType,
  PostMetaType,
  PostType,
  TutMetaType,
  TutType,
} from "../types";
import config from "./config/config";

export const getPosts = async (): Promise<PostMetaType[]> => {
  return createClient(config).fetch(groq`*[_type == "post"]{
    _id,
    _createdAt,
    name,
    intro,
    "slug": slug.current,
    "image": image.asset->url,
  }`);
};

export const getPost = async (slug: string): Promise<PostType> => {
  return createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      intro,
      "slug": slug.current,
      content,
      "image": image.asset->url,
    }`,
    { slug }
  );
};

export const getTutorials = async (): Promise<TutMetaType[]> => {
  return createClient(config).fetch(groq`*[_type == "tutorial"]{
      _id,
      _createdAt,
      name,
      intro,
      "slug": slug.current,
    }`);
};

export const getTutorial = async (slug: string): Promise<TutType> => {
  return createClient(config).fetch(
    groq`*[_type == "tutorial" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      intro,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
};

export function getPages(): Promise<PageType[]> {
  return createClient(config).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export function getPage(slug: string): Promise<PageType> {
  return createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
  }`,
    { slug }
  );
}
