import { gql } from "@apollo/client";

export type Attachment = {
  url: string;
};

export type ProductCategory = {
  _id: string;
  name?: string;
  code?: string;
  order?: string;
  parentId?: string;
  attachment?: Attachment;
};

export type Product = {
  _id: string;
  name?: string;
  code?: string;
  description?: string;
  type?: string;
  createdAt?: string;
  unitPrice?: number;
  remainder?: number;
  hasSimilarity?: boolean;
  attachment?: Attachment;
  attachmentMore?: Attachment[];
  customFieldsData?: Record<string, unknown>;
  category?: Pick<ProductCategory, "_id" | "name" | "order">;
};

export type ProductSimilarityGroup = {
  fieldId?: string;
  title?: string;
};

export const POSC_PRODUCT_CATEGORIES = gql`
  query poscProductCategories(
    $parentId: String
    $searchValue: String
    $excludeEmpty: Boolean
    $meta: String
    $page: Int
    $perPage: Int
    $sortField: String
    $sortDirection: Int
  ) {
    poscProductCategories(
      parentId: $parentId
      searchValue: $searchValue
      excludeEmpty: $excludeEmpty
      meta: $meta
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      _id
      name
      code
      order
      parentId
      attachment {
        url
      }
    }
  }
`;

export type PoscProductCategoriesVariables = {
  parentId?: string;
  searchValue?: string;
  excludeEmpty?: boolean;
  meta?: string;
  page?: number;
  perPage?: number;
  sortField?: string;
  sortDirection?: number;
};

export type PoscProductCategoriesData = {
  poscProductCategories: ProductCategory[];
};

export const POSC_PRODUCTS = gql`
  query poscProducts(
    $searchValue: String
    $type: String
    $categoryId: String
    $page: Int
    $perPage: Int
    $isKiosk: Boolean
    $groupedSimilarity: String
    $sortField: String
    $sortDirection: Int
  ) {
    poscProducts(
      searchValue: $searchValue
      categoryId: $categoryId
      type: $type
      page: $page
      perPage: $perPage
      isKiosk: $isKiosk
      groupedSimilarity: $groupedSimilarity
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      _id
      name
      code
      unitPrice
      hasSimilarity
      attachment {
        url
      }
    }
  }
`;

export type PoscProductsVariables = {
  searchValue?: string;
  type?: string;
  categoryId?: string;
  page?: number;
  perPage?: number;
  isKiosk?: boolean;
  groupedSimilarity?: string;
  sortField?: string;
  sortDirection?: number;
};

export type PoscProductsData = {
  poscProducts: Product[];
};

export const POSC_PRODUCTS_META = gql`
  query poscProductsMeta($perPage: Int) {
    poscProducts(perPage: $perPage, isKiosk: true) {
      _id
      modifiedAt
    }
  }
`;

export type PoscProductsMetaVariables = {
  perPage?: number;
};

export type PoscProductsMetaData = {
  poscProducts: Array<{ _id: string; modifiedAt?: string }>;
};

export const POSC_PRODUCT_SIMILARITIES = gql`
  query PoscProductSimilarities($id: String!, $groupedSimilarity: String) {
    poscProductSimilarities(_id: $id, groupedSimilarity: $groupedSimilarity) {
      products {
        _id
        name
        description
        code
        type
        createdAt
        unitPrice
        remainder
        category {
          order
          name
          _id
        }
        attachment {
          url
        }
        attachmentMore {
          url
        }
        customFieldsData
      }
      groups {
        fieldId
        title
      }
    }
  }
`;

export type PoscProductSimilaritiesVariables = {
  id: string;
  groupedSimilarity?: string;
};

export type PoscProductSimilaritiesData = {
  poscProductSimilarities: {
    products: Product[];
    groups: ProductSimilarityGroup[];
  };
};

export const POSC_PRODUCTS_COUNT = gql`
  query productsCount(
    $categoryId: String
    $type: String
    $searchValue: String
    $groupedSimilarity: String
    $isKiosk: Boolean
  ) {
    poscProductsTotalCount(
      categoryId: $categoryId
      type: $type
      searchValue: $searchValue
      groupedSimilarity: $groupedSimilarity
      isKiosk: $isKiosk
    )
  }
`;

export type PoscProductsCountVariables = {
  categoryId?: string;
  type?: string;
  searchValue?: string;
  groupedSimilarity?: string;
  isKiosk?: boolean;
};

export type PoscProductsCountData = {
  poscProductsTotalCount: number;
};

export const POSC_PRODUCT_DETAIL = gql`
  query ProductDetail($_id: String) {
    poscProductDetail(_id: $_id) {
      _id
      name
      description
      code
      type
      createdAt
      unitPrice
      remainder
      hasSimilarity
      category {
        order
        name
        _id
      }
      attachment {
        url
      }
      attachmentMore {
        url
      }
    }
  }
`;

export type PoscProductDetailVariables = {
  _id?: string;
};

export type PoscProductDetailData = {
  poscProductDetail: Product | null;
};
