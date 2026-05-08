import { gql } from "@apollo/client";
import type { CPUser } from "../queries/currentUser";

export type SocialAuthProvider = "google" | "facebook" | "apple" | "twitter";

export const CLIENT_PORTAL_USER_REGISTER_WITH_SOCIAL = gql`
  mutation ClientPortalUserRegisterWithSocial(
    $provider: SocialAuthProvider!
    $token: String!
  ) {
    clientPortalUserRegisterWithSocial(provider: $provider, token: $token) {
      _id
      email
      phone
      username
      firstName
      lastName
      socialAuthProviders
      isVerified
      isEmailVerified
      isPhoneVerified
      createdAt
    }
  }
`;

export type ClientPortalUserRegisterWithSocialVariables = {
  provider: SocialAuthProvider;
  token: string;
};

export type ClientPortalUserRegisterWithSocialData = {
  clientPortalUserRegisterWithSocial: CPUser;
};
