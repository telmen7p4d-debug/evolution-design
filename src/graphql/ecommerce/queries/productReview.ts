import { gql } from "@apollo/client";

export type ProductReview = {
  _id: string;
  productId?: string;
  customerId?: string;
  review?: number;
  description?: string;
  info?: Record<string, unknown>;
};

export const CP_PRODUCT_REVIEWS = gql`
  query cpProductReviews(
    $productIds: [String]
    $customerId: String
    $page: Int
    $perPage: Int
  ) {
    cpProductReviews(
      productIds: $productIds
      customerId: $customerId
      page: $page
      perPage: $perPage
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

export type CpProductReviewsVariables = {
  productIds?: string[];
  customerId?: string;
  page?: number;
  perPage?: number;
};

export type CpProductReviewsData = {
  cpProductReviews: ProductReview[];
};
