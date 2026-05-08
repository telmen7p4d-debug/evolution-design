import { gql } from "@apollo/client";
import type { Page } from "../queries/page";
import type { AttachmentInput, TranslationInput } from "./post";

export type PageItemInput = {
  name?: string;
  type?: string;
  content?: string;
  order?: number;
  objectType?: string;
  objectId?: string;
  config?: Record<string, unknown>;
};

export type PageInput = {
  clientPortalId?: string;
  language?: string;
  name?: string;
  parentId?: string;
  description?: string;
  coverImage?: string;
  status?: string;
  type?: string;
  slug?: string;
  content?: string;
  thumbnail?: AttachmentInput;
  pageImages?: AttachmentInput[];
  video?: AttachmentInput;
  audio?: AttachmentInput;
  documents?: AttachmentInput[];
  attachments?: AttachmentInput[];
  videoUrl?: string;
  pageItems?: PageItemInput[];
  customFieldsData?: Record<string, unknown>;
  translations?: TranslationInput[];
};

export const CP_CMS_PAGES_ADD = gql`
  mutation CpCmsPagesAdd($input: PageInput!) {
    cpCmsPagesAdd(input: $input) {
      _id
      clientPortalId
      name
      slug
      description
      content
      status
      type
      parentId
      thumbnail {
        name
        url
        type
        size
      }
      pageImages {
        name
        url
        type
        size
      }
      videoUrl
      pageItems {
        _id
        name
        type
        content
        order
        objectType
        objectId
        config
      }
      customFieldsData
      createdAt
      updatedAt
    }
  }
`;

export type CpCmsPagesAddVariables = {
  input: PageInput;
};

export type CpCmsPagesAddData = {
  cpCmsPagesAdd: Page;
};
