import { gql } from "@apollo/client";
import type { SocialAuthProvider } from "./registerWithSocial";

export const CLIENT_PORTAL_USER_LOGIN_WITH_SOCIAL = gql`
  mutation ClientPortalUserLoginWithSocial(
    $provider: SocialAuthProvider!
    $token: String!
  ) {
    clientPortalUserLoginWithSocial(provider: $provider, token: $token)
  }
`;

export type ClientPortalUserLoginWithSocialVariables = {
  provider: SocialAuthProvider;
  token: string;
};

// Returns token string
export type ClientPortalUserLoginWithSocialData = {
  clientPortalUserLoginWithSocial: string;
};
