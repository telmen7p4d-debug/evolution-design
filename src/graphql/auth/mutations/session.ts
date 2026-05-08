import { gql } from "@apollo/client";

export const CLIENT_PORTAL_LOGOUT = gql`
  mutation ClientPortalLogout {
    clientPortalLogout
  }
`;

export const CLIENT_PORTAL_USER_REFRESH_TOKEN = gql`
  mutation ClientPortalUserRefreshToken($refreshToken: String!) {
    clientPortalUserRefreshToken(refreshToken: $refreshToken)
  }
`;

export type ClientPortalUserRefreshTokenVariables = {
  refreshToken: string;
};

export type ClientPortalUserRefreshTokenData = {
  clientPortalUserRefreshToken: string;
};

export type ClientPortalLogoutData = {
  clientPortalLogout: string;
};
