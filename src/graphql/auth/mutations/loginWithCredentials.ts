import { gql } from "@apollo/client";

export const CLIENT_PORTAL_USER_LOGIN_WITH_CREDENTIALS = gql`
  mutation ClientPortalUserLoginWithCredentials(
    $email: String
    $phone: String
    $password: String
  ) {
    clientPortalUserLoginWithCredentials(
      email: $email
      phone: $phone
      password: $password
    )
  }
`;

export type ClientPortalUserLoginWithCredentialsVariables = {
  email?: string;
  phone?: string;
  password?: string;
};

// Returns JSON — typically { token, refreshToken }
export type ClientPortalUserLoginWithCredentialsData = {
  clientPortalUserLoginWithCredentials: Record<string, unknown>;
};
