import { gql } from "@apollo/client";
import type { CPUser } from "../queries/currentUser";
import type { SocialAuthProvider } from "./registerWithSocial";

export const CLIENT_PORTAL_USER_LINK_SOCIAL_ACCOUNT = gql`
  mutation ClientPortalUserLinkSocialAccount(
    $provider: SocialAuthProvider!
    $token: String!
  ) {
    clientPortalUserLinkSocialAccount(provider: $provider, token: $token) {
      _id
      socialAuthProviders
    }
  }
`;

export const CLIENT_PORTAL_USER_UNLINK_SOCIAL_ACCOUNT = gql`
  mutation ClientPortalUserUnlinkSocialAccount($provider: SocialAuthProvider!) {
    clientPortalUserUnlinkSocialAccount(provider: $provider) {
      _id
      socialAuthProviders
    }
  }
`;

export type ClientPortalUserLinkSocialAccountVariables = {
  provider: SocialAuthProvider;
  token: string;
};

export type ClientPortalUserLinkSocialAccountData = {
  clientPortalUserLinkSocialAccount: CPUser;
};

export type ClientPortalUserUnlinkSocialAccountVariables = {
  provider: SocialAuthProvider;
};

export type ClientPortalUserUnlinkSocialAccountData = {
  clientPortalUserUnlinkSocialAccount: CPUser;
};
