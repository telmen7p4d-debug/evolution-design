import { gql } from "@apollo/client";

export const CLIENT_PORTAL_USER_FORGOT_PASSWORD = gql`
  mutation ClientPortalUserForgotPassword($identifier: String!) {
    clientPortalUserForgotPassword(identifier: $identifier)
  }
`;

export const CLIENT_PORTAL_USER_RESET_PASSWORD = gql`
  mutation ClientPortalUserResetPassword(
    $token: String
    $identifier: String
    $code: String
    $newPassword: String!
  ) {
    clientPortalUserResetPassword(
      token: $token
      identifier: $identifier
      code: $code
      newPassword: $newPassword
    )
  }
`;

export type ClientPortalUserForgotPasswordVariables = {
  identifier: string;
};

export type ClientPortalUserForgotPasswordData = {
  clientPortalUserForgotPassword: string;
};

export type ClientPortalUserResetPasswordVariables = {
  token?: string;
  identifier?: string;
  code?: string;
  newPassword: string;
};

export type ClientPortalUserResetPasswordData = {
  clientPortalUserResetPassword: string;
};
