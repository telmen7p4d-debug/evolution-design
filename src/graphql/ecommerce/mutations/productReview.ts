import { gql } from "@apollo/client";
import type { ProductReview } from "../queries/productReview";

export type ProductReviewInput = {
  productId?: string;
  customerId?: string;
  review?: number;
  description?: string;
  info?: Record<string, unknown>;
};

export const CP_PRODUCT_REVIEW_ADD = gql`
  mutation cpProductReviewAdd(
    $productId: String
    $customerId: String
    $review: Float
    $description: String
    $info: JSON
  ) {
    cpProductReviewAdd(
      productId: $productId
      customerId: $customerId
      review: $review
      description: $description
      info: $info
    ) {
      _id
      productId
      customerId
      review
      description
      info
    }
  }
`;

export type CpProductReviewAddVariables = ProductReviewInput;

export type CpProductReviewAddData = {
  cpProductReviewAdd: ProductReview;
};

export const PRODUCT_REVIEW_UPDATE = gql`
  mutation cpProductReviewUpdate(
    $_id: String!
    $productId: String
    $customerId: String
    $review: Float
    $description: String
    $info: JSON
  ) {
    cpProductReviewUpdate(
      _id: $_id
      productId: $productId
      customerId: $customerId
      review: $review
      description: $description
      info: $info
    ) {
      _id
      productId
      customerId
      review
      description
      info
    }
  }
`;

export type ProductReviewUpdateVariables = { _id: string } & ProductReviewInput;

export type ProductReviewUpdateData = {
  productreviewUpdate: ProductReview;
};

export const PRODUCT_REVIEW_REMOVE = gql`
  mutation cpProductReviewRemove($_id: String!) {
    cpProductReviewRemove(_id: $_id) {
      _id
    }
  }
`;

export type ProductReviewRemoveVariables = {
  _id: string;
};

export type ProductReviewRemoveData = {
  cpProductReviewRemove: { _id: string };
};
