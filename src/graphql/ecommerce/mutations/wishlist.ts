import { gql } from "@apollo/client";

export const CP_WISHLIST_ADD = gql`
  mutation cpWishlistAdd($productId: String!, $customerId: String!) {
    cpWishlistAdd(productId: $productId, customerId: $customerId) {
      _id
      productId
      customerId
      product {
        _id
        name
        code
        unitPrice
        attachment {
          url
        }
      }
    }
  }
`;

export type CpWishlistAddVariables = {
  productId?: string;
  customerId?: string;
};

export type CpWishlistAddData = {
  cpWishlistAdd: { _id: string };
};

export const CP_WISHLIST_UPDATE = gql`
  mutation cpWishlistUpdate(
    $_id: String!
    $productId: String
    $customerId: String
  ) {
    cpWishlistUpdate(
      _id: $_id
      productId: $productId
      customerId: $customerId
    ) {
      _id
      productId
      customerId
    }
  }
`;

export type CpWishlistUpdateVariables = {
  _id: string;
  productId?: string;
  customerId?: string;
};

export type CpWishlistUpdateData = {
  cpWishlistUpdate: { _id: string };
};

export const CP_WISHLIST_REMOVE = gql`
  mutation cpWishlistRemove($_id: String!) {
    cpWishlistRemove(_id: $_id) {
      _id
      productId
    }
  }
`;

export type CpWishlistRemoveVariables = {
  _id: string;
};

export type CpWishlistRemoveData = {
  cpWishlistRemove: { _id: string };
};
