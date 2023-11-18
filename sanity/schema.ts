import { type SchemaTypeDefinition } from "sanity";
import tutorial from "./schemas/tutorial-schema";
import post from "./schemas/post-schema";
import page from "./schemas/page-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tutorial, page],
};
