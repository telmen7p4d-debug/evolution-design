import { gql } from "@apollo/client";
import type { PostCategory } from "../queries/category";
import type { TranslationInput } from "./post";

export type PostCategoryInput = {
  name?: string;
  slug?: string;
  description?: string;
  parentId?: string;
  status?: string;
  clientPortalId?: string;
  customFieldsData?: Record<string, unknown>;
  translations?: TranslationInput[];
};

export const CP_CMS_CATEGORIES_ADD = gql`
  mutation CpCmsCategoriesAdd($input: PostCategoryInput!) {
    cpCmsCategoriesAdd(input: $input) {
      _id
      clientPortalId
      name
      slug
      description
      parentId
      status
      parent {
        _id
        name
        slug
      }
      customFieldsData
      createdAt
      updatedAt
    }
  }
`;

export type CpCmsCategoriesAddVariables = {
  input: PostCategoryInput;
};

export type CpCmsCategoriesAddData = {
  cpCmsCategoriesAdd: PostCategory;
};
