import { gql } from "@apollo/client";
import type { CPUser } from "../queries/currentUser";

export const CLIENT_PORTAL_USER_REQUEST_CHANGE_EMAIL = gql`
  mutation ClientPortalUserRequestChangeEmail($newEmail: String!) {
    clientPortalUserRequestChangeEmail(newEmail: $newEmail)
  }
`;

export const CLIENT_PORTAL_USER_CONFIRM_CHANGE_EMAIL = gql`
  mutation ClientPortalUserConfirmChangeEmail($code: String!) {
    clientPortalUserConfirmChangeEmail(code: $code) {
      _id
      email
      isEmailVerified
    }
  }
`;

export const CLIENT_PORTAL_USER_REQUEST_CHANGE_PHONE = gql`
  mutation ClientPortalUserRequestChangePhone($newPhone: String!) {
    clientPortalUserRequestChangePhone(newPhone: $newPhone)
  }
`;

export const CLIENT_PORTAL_USER_CONFIRM_CHANGE_PHONE = gql`
  mutation ClientPortalUserConfirmChangePhone($code: String!) {
    clientPortalUserConfirmChangePhone(code: $code) {
      _id
      phone
      isPhoneVerified
    }
  }
`;

export type ClientPortalUserRequestChangeEmailVariables = { newEmail: string };
export type ClientPortalUserRequestChangeEmailData = { clientPortalUserRequestChangeEmail: string };

export type ClientPortalUserConfirmChangeEmailVariables = { code: string };
export type ClientPortalUserConfirmChangeEmailData = { clientPortalUserConfirmChangeEmail: CPUser };

export type ClientPortalUserRequestChangePhoneVariables = { newPhone: string };
export type ClientPortalUserRequestChangePhoneData = { clientPortalUserRequestChangePhone: string };

export type ClientPortalUserConfirmChangePhoneVariables = { code: string };
export type ClientPortalUserConfirmChangePhoneData = { clientPortalUserConfirmChangePhone: CPUser };
