import { gql } from "@apollo/client";
import type { Order } from "../queries/order";

export type OrderItemInput = {
  productId?: string;
  count?: number;
  unitPrice?: number;
  isPackage?: boolean;
  isTake?: boolean;
  status?: string;
  discountAmount?: number;
  discountPercent?: number;
  bonusCount?: number;
};

export type OrderAddEditVariables = {
  items?: OrderItemInput[];
  totalAmount: number;
  type: string;
  customerId?: string;
  customerType?: string;
  registerNumber?: string;
  billType?: string;
  origin?: string;
  dueDate?: string;
  branchId?: string;
  deliveryInfo?: Record<string, unknown>;
  description?: string;
  saleStatus?: string;
};

const addEditParamDefs = `$items: [OrderItemInput], $totalAmount: Float!, $type: String!, $customerId: String, $customerType: String, $registerNumber: String, $billType: String, $origin: String, $dueDate: Date, $branchId: String, $deliveryInfo: JSON, $description: String, $saleStatus: String`;
const addEditParams = `items: $items, totalAmount: $totalAmount, type: $type, customerId: $customerId, customerType: $customerType, registerNumber: $registerNumber, billType: $billType, origin: $origin, dueDate: $dueDate, branchId: $branchId, deliveryInfo: $deliveryInfo, description: $description, saleStatus: $saleStatus`;

export const CP_ORDERS_ADD = gql`
  mutation cpOrdersAdd(${addEditParamDefs}) {
    cpOrdersAdd(${addEditParams}) {
      _id
      status
      totalAmount
      number
      deliveryInfo
      items {
        _id
        productId
        productName
        productImgUrl
        count
        unitPrice
      }
    }
  }
`;

export type CpOrdersAddVariables = OrderAddEditVariables;

export type CpOrdersAddData = {
  cpOrdersAdd: Pick<Order, "_id">;
};

export const CP_ORDERS_EDIT = gql`
  mutation cpOrdersEdit($_id: String!, ${addEditParamDefs}) {
    cpOrdersEdit(_id: $_id, ${addEditParams}) {
      _id
      status
    }
  }
`;

export type CpOrdersEditVariables = OrderAddEditVariables & { _id: string };

export type CpOrdersEditData = {
  cpOrdersEdit: Pick<Order, "_id" | "status">;
};

export const CP_ORDERS_CANCEL = gql`
  mutation cpOrdersCancel($_id: String!) {
    cpOrdersCancel(_id: $_id)
  }
`;

export type CpOrdersCancelVariables = {
  _id: string;
};

export type CpOrdersCancelData = {
  cpOrdersCancel: boolean;
};

export const CP_ORDER_CHANGE_SALE_STATUS = gql`
  mutation cpOrderChangeSaleStatus($_id: String!, $saleStatus: String) {
    cpOrderChangeSaleStatus(_id: $_id, saleStatus: $saleStatus) {
      _id
    }
  }
`;

export type CpOrderChangeSaleStatusVariables = {
  _id: string;
  saleStatus?: string;
};

export type CpOrderChangeSaleStatusData = {
  cpOrderChangeSaleStatus: Pick<Order, "_id">;
};
