import { gql } from "@apollo/client";

export type Wishlist = {
  _id: string;
  productId?: string;
  customerId?: string;
  product?: {
    _id: string;
    name?: string;
    code?: string;
    unitPrice?: number;
    attachment?: { url?: string };
  };
};

export const CP_WISH = gql`
  query cpWish($productIds: [String], $customerId: String) {
    cpWish(productIds: $productIds, customerId: $customerId) {
      _id
      productId
      customerId
    }
  }
`;

export type CpWishVariables = {
  productIds?: string[];
  customerId?: string;
};

export type CpWishData = {
  cpWish: Wishlist[];
};

export const CP_WISHLIST = gql`
  query cpWishlist($customerId: String!) {
    cpWishlist(customerId: $customerId) {
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

export type CpWishlistVariables = {
  customerId?: string;
};

export type CpWishlistData = {
  cpWishlist: Wishlist[];
};
