import { gql } from "@apollo/client";

export type Payment = {
  _id: string;
  name?: string;
  kind?: string;
  status?: string;
  config?: Record<string, unknown>;
  createdAt?: string;
};

export type Invoice = {
  _id: string;
  invoiceNumber?: string;
  amount?: number;
  remainingAmount?: number;
  phone?: string;
  email?: string;
  description?: string;
  status?: string;
  data?: Record<string, unknown>;
  contentTypeId?: string;
  transactions?: PaymentTransaction[];
};

export type PaymentTransaction = {
  _id: string;
  paymentId?: string;
  paymentKind?: string;
  status?: string;
  details?: Record<string, unknown>;
  response?: Record<string, unknown>;
};

export const CP_PAYMENTS = gql`
  query cpPayments {
    cpPayments {
      _id
      name
      kind
      status
      config
      createdAt
    }
  }
`;

export type CpPaymentsData = {
  cpPayments: Payment[];
};

export const INVOICE_UPDATED = gql`
  subscription invoiceUpdated($invoiceId: String!) {
    invoiceUpdated(_id: $invoiceId)
  }
`;

export type InvoiceUpdatedVariables = {
  invoiceId: string;
};

export type InvoiceUpdatedData = {
  invoiceUpdated: boolean;
};

export const TRANSACTION_UPDATED = gql`
  subscription transactionUpdated($invoiceId: String!) {
    transactionUpdated(invoiceId: $invoiceId)
  }
`;

export type TransactionUpdatedVariables = {
  invoiceId: string;
};

export type TransactionUpdatedData = {
  transactionUpdated: boolean;
};
