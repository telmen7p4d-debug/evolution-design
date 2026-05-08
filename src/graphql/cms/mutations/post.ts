import { gql } from "@apollo/client";
import type { Post, PostStatus, PostReactionType } from "../queries/post";

export type AttachmentInput = {
  name: string;
  url: string;
  type: string;
  size: number;
};

export type PdfAttachmentInput = {
  name: string;
  url: string;
  type: string;
  size: number;
};

export type TranslationInput = {
  objectId?: string;
  language: string;
  title?: string;
  content?: string;
  excerpt?: string;
  customFieldsData?: Record<string, unknown>;
  type?: string;
};

export type PostInput = {
  clientPortalId?: string;
  webId?: string;
  language?: string;
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  categoryIds?: string[];
  featured?: boolean;
  status?: PostStatus;
  tagIds?: string[];
  authorId?: string;
  scheduledDate?: string;
  publishedDate?: string;
  autoArchiveDate?: string;
  reactions?: PostReactionType[];
  reactionCounts?: Record<string, number>;
  thumbnail?: AttachmentInput;
  images?: AttachmentInput[];
  video?: AttachmentInput;
  audio?: AttachmentInput;
  documents?: AttachmentInput[];
  attachments?: AttachmentInput[];
  pdfAttachment?: PdfAttachmentInput;
  videoUrl?: string;
  customFieldsData?: Record<string, unknown>;
  type?: string;
  translations?: TranslationInput[];
};

export const CP_CMS_POSTS_ADD = gql`
  mutation CpCmsPostsAdd($input: PostInput!) {
    cpCmsPostsAdd(input: $input) {
      _id
      clientPortalId
      webId
      type
      title
      slug
      content
      excerpt
      status
      featured
      featuredDate
      publishedDate
      scheduledDate
      categoryIds
      tagIds
      thumbnail {
        name
        url
        type
        size
      }
      images {
        name
        url
        type
        size
      }
      videoUrl
      customFieldsData
      createdAt
      updatedAt
    }
  }
`;

export type CpCmsPostsAddVariables = {
  input: PostInput;
};

export type CpCmsPostsAddData = {
  cpCmsPostsAdd: Post;
};
