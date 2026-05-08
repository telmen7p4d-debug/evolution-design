import { gql } from "@apollo/client";
import type { Invoice, PaymentTransaction } from "../queries/payment";

export type InvoiceInput = {
  amount: number;
  phone?: string;
  email?: string;
  description?: string;
  contentType?: string;
  contentTypeId?: string;
  customerId?: string;
  customerType?: string;
  paymentIds?: string[];
  data?: Record<string, unknown>;
};

export type PaymentTransactionInput = {
  invoiceId: string;
  paymentId: string;
  paymentKind?: string;
  amount?: number;
  details?: Record<string, unknown>;
};

export const INVOICE_CREATE = gql`
  mutation InvoiceCreate($input: InvoiceInput!) {
    invoiceCreate(input: $input) {
      _id
      invoiceNumber
      amount
      remainingAmount
      phone
      email
      description
      status
      data
      contentTypeId
      transactions {
        _id
        paymentId
        paymentKind
        status
        details
        response
      }
    }
  }
`;

export type InvoiceCreateVariables = {
  input: InvoiceInput;
};

export type InvoiceCreateData = {
  invoiceCreate: Invoice;
};

export const INVOICES_CHECK = gql`
  mutation InvoicesCheck($id: String!) {
    invoicesCheck(_id: $id)
  }
`;

export type InvoicesCheckVariables = {
  id: string;
};

export type InvoicesCheckData = {
  invoicesCheck: boolean;
};

export const PAYMENT_TRANSACTIONS_ADD = gql`
  mutation PaymentTransactionsAdd($input: PaymentTransactionInput!) {
    paymentTransactionsAdd(input: $input) {
      _id
      amount
      invoiceId
      paymentId
      paymentKind
      status
      response
      details
    }
  }
`;

export type PaymentTransactionsAddVariables = {
  input: PaymentTransactionInput;
};

export type PaymentTransactionsAddData = {
  paymentTransactionsAdd: PaymentTransaction & {
    amount?: number;
    invoiceId?: string;
  };
};
