import { gql } from "@apollo/client";

export const CLIENT_PORTAL_USER_REQUEST_OTP = gql`
  mutation ClientPortalUserRequestOTP($identifier: String!) {
    clientPortalUserRequestOTP(identifier: $identifier)
  }
`;

export const CLIENT_PORTAL_USER_LOGIN_WITH_OTP = gql`
  mutation ClientPortalUserLoginWithOTP(
    $identifier: String!
    $otp: String!
  ) {
    clientPortalUserLoginWithOTP(identifier: $identifier, otp: $otp)
  }
`;

export type ClientPortalUserRequestOTPVariables = {
  identifier: string;
};

export type ClientPortalUserRequestOTPData = {
  clientPortalUserRequestOTP: string;
};

export type ClientPortalUserLoginWithOTPVariables = {
  identifier: string;
  otp: string;
};

// Returns JSON — typically { token, refreshToken }
export type ClientPortalUserLoginWithOTPData = {
  clientPortalUserLoginWithOTP: Record<string, unknown>;
};
