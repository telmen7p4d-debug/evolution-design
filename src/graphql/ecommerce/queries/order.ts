import { gql } from "@apollo/client";

export type OrderItem = {
  _id: string;
  unitPrice?: number;
  orderId?: string;
  productName?: string;
  count?: number;
  productId?: string;
  isPackage?: boolean;
  isTake?: boolean;
  status?: string;
  productImgUrl?: string;
  discountAmount?: number;
  discountPercent?: number;
  bonusCount?: number;
};

export type Order = {
  _id: string;
  createdAt?: string;
  modifiedAt?: string;
  number?: string;
  status?: string;
  paidDate?: string;
  mobileAmount?: number;
  totalAmount?: number;
  slotCode?: string;
  registerNumber?: string;
  customerId?: string;
  printedEbarimt?: boolean;
  billType?: string;
  billId?: string;
  origin?: string;
  type?: string;
  deliveryInfo?: Record<string, unknown>;
  description?: string;
  items?: OrderItem[];
};

export type PutResponse = {
  totalAmount?: number;
  customerTin?: string;
  customerName?: string;
  id?: string;
  qrData?: string;
  lottery?: string;
};

const ORDER_ITEM_FIELDS = gql`
  fragment OrderItemFields on OrderItem {
    _id
    unitPrice
    orderId
    productName
    count
    productId
    isPackage
    isTake
    status
    productImgUrl
    discountAmount
    discountPercent
    bonusCount
  }
`;

export const CP_FULL_ORDERS = gql`
  ${ORDER_ITEM_FIELDS}
  query cpFullOrders(
    $customerId: String
    $saleStatus: String
    $perPage: Int
    $sortField: String
    $sortDirection: Int
    $statuses: [String]
  ) {
    cpFullOrders(
      customerId: $customerId
      saleStatus: $saleStatus
      perPage: $perPage
      sortField: $sortField
      sortDirection: $sortDirection
      statuses: $statuses
    ) {
      _id
      deliveryInfo
      description
      billType
      registerNumber
      items {
        ...OrderItemFields
      }
    }
  }
`;

export type CpFullOrdersVariables = {
  customerId?: string;
  saleStatus?: string;
  perPage?: number;
  sortField?: string;
  sortDirection?: number;
  statuses?: string[];
};

export type CpFullOrdersData = {
  cpFullOrders: Order[];
};

export const ACTIVE_ORDER_DETAIL = gql`
  ${ORDER_ITEM_FIELDS}
  query ActiveOrderDetail($id: String, $customerId: String) {
    orderDetail(_id: $id, customerId: $customerId) {
      _id
      deliveryInfo
      description
      billType
      registerNumber
      items {
        ...OrderItemFields
      }
    }
  }
`;

export type ActiveOrderDetailVariables = {
  id?: string;
  customerId?: string;
};

export type ActiveOrderDetailData = {
  orderDetail: Order | null;
};

export const FULL_ORDERS = gql`
  query cpFullOrdersList(
    $customerId: String
    $statuses: [String]
    $perPage: Int
    $sortField: String
    $sortDirection: Int
    $saleStatus: String
  ) {
    cpFullOrders(
      customerId: $customerId
      statuses: $statuses
      perPage: $perPage
      sortField: $sortField
      sortDirection: $sortDirection
      saleStatus: $saleStatus
    ) {
      _id
      createdAt
      paidDate
      status
      totalAmount
      number
      items {
        productName
        productImgUrl
      }
    }
  }
`;

export type FullOrdersVariables = {
  customerId?: string;
  statuses?: string[];
  perPage?: number;
  sortField?: string;
  sortDirection?: number;
  saleStatus?: string;
};

export type FullOrdersData = {
  cpFullOrders: Order[];
};

export const ORDERS_CHECK_COMPANY = gql`
  query ordersCheckCompany($registerNumber: String!) {
    ordersCheckCompany(registerNumber: $registerNumber)
  }
`;

export type OrdersCheckCompanyVariables = {
  registerNumber: string;
};

export type OrdersCheckCompanyData = {
  ordersCheckCompany: Record<string, unknown>;
};

export const CP_ORDER_DETAIL = gql`
  ${ORDER_ITEM_FIELDS}
  query cpOrderDetail($id: String!, $customerId: String!) {
    cpOrderDetail(_id: $id, customerId: $customerId) {
      _id
      createdAt
      modifiedAt
      number
      status
      paidDate
      mobileAmount
      totalAmount
      slotCode
      registerNumber
      customerId
      printedEbarimt
      billType
      billId
      origin
      type
      deliveryInfo
      description
      items {
        ...OrderItemFields
      }
      customer {
        firstName
        lastName
        primaryEmail
        primaryPhone
        code
      }
      user {
        _id
        primaryPhone
        firstName
        primaryEmail
        lastName
      }
      putResponses {
        totalAmount
        customerTin
        customerName
        id
        qrData
        lottery
      }
    }
  }
`;

export type CpOrderDetailVariables = {
  id: string;
  customerId: string;
};

export type CpOrderDetailData = {
  cpOrderDetail: Order & {
    customer?: {
      firstName?: string;
      lastName?: string;
      primaryEmail?: string;
      primaryPhone?: string;
      code?: string;
    };
    user?: {
      _id?: string;
      primaryPhone?: string;
      firstName?: string;
      primaryEmail?: string;
      lastName?: string;
    };
    putResponses?: PutResponse[];
  };
};

export const ORDER_ITEM_DETAIL = gql`
  query OrderItemDetail($id: String) {
    poscProductDetail(_id: $id) {
      remainder
      category {
        name
      }
    }
  }
`;

export type OrderItemDetailVariables = {
  id?: string;
};

export type OrderItemDetailData = {
  poscProductDetail: {
    remainder?: number;
    category?: { name?: string };
  } | null;
};

export const ORDER_INVOICES = gql`
  query Invoices($contentType: String, $contentTypeId: String) {
    invoices(contentType: $contentType, contentTypeId: $contentTypeId) {
      _id
      amount
      status
    }
  }
`;

export type OrderInvoicesVariables = {
  contentType?: string;
  contentTypeId?: string;
};

export type OrderInvoicesData = {
  invoices: Array<{ _id: string; amount?: number; status?: string }>;
};

export const ORDER_ADDRESSES = gql`
  query Addresses {
    clientPortalCurrentUser {
      customer {
        addresses
      }
    }
  }
`;

export type OrderAddressesData = {
  clientPortalCurrentUser: {
    customer?: { addresses?: Record<string, unknown>[] };
  } | null;
};

export const ORDERS_ORDERED = gql`
  subscription ordersOrdered(
    $statuses: [String]
    $customerId: String
    $token: String
  ) {
    ordersOrdered(
      statuses: $statuses
      customerId: $customerId
      posToken: $token
    ) {
      _id
    }
  }
`;

export type OrdersOrderedVariables = {
  statuses?: string[];
  customerId?: string;
  token?: string;
};

export type OrdersOrderedData = {
  ordersOrdered: { _id: string };
};
