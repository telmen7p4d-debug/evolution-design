import { gql } from "@apollo/client";
import type { PostTag } from "../queries/tag";
import type { TranslationInput } from "./post";

export type PostTagInput = {
  name?: string;
  slug?: string;
  colorCode?: string;
  clientPortalId?: string;
  language?: string;
  translations?: TranslationInput[];
};

export const CP_CMS_TAGS_ADD = gql`
  mutation CpCmsTagsAdd($input: PostTagInput!) {
    cpCmsTagsAdd(input: $input) {
      _id
      clientPortalId
      name
      slug
      colorCode
      createdAt
      updatedAt
    }
  }
`;

export type CpCmsTagsAddVariables = {
  input: PostTagInput;
};

export type CpCmsTagsAddData = {
  cpCmsTagsAdd: PostTag;
};
