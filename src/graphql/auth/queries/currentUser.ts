import { gql } from "@apollo/client";

export type SocialAuthProvider = "google" | "facebook" | "apple" | "twitter";

export type CPUser = {
  _id: string;
  type?: string;
  email?: string;
  phone?: string;
  username?: string;
  code?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  companyName?: string;
  companyRegistrationNumber?: string;
  clientPortalId?: string;
  erxesCustomerId?: string;
  erxesCompanyId?: string;
  customFieldsData?: Record<string, unknown>;
  propertiesData?: Record<string, unknown>;
  isVerified?: boolean;
  isPhoneVerified?: boolean;
  isEmailVerified?: boolean;
  socialAuthProviders?: SocialAuthProvider[];
  failedLoginAttempts?: number;
  accountLockedUntil?: string;
  lastLoginAt?: string;
  primaryAuthMethod?: string;
  createdAt?: string;
  updatedAt?: string;
};

export const CLIENT_PORTAL_CURRENT_USER = gql`
  query ClientPortalCurrentUser {
    clientPortalCurrentUser {
      _id
      type
      email
      phone
      username
      firstName
      lastName
      avatar
      companyName
      companyRegistrationNumber
      clientPortalId
      erxesCustomerId
      erxesCompanyId
      isVerified
      isPhoneVerified
      isEmailVerified
      socialAuthProviders {
        provider
      }
      primaryAuthMethod
      lastLoginAt
      createdAt
      updatedAt
    }
  }
`;

export type ClientPortalCurrentUserData = {
  clientPortalCurrentUser: CPUser | null;
};
