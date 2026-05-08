import { gql } from "@apollo/client";
import type { CPUser } from "../queries/currentUser";

export const CLIENT_PORTAL_USER_VERIFY = gql`
  mutation ClientPortalUserVerify(
    $userId: String
    $code: String!
    $email: String
    $phone: String
  ) {
    clientPortalUserVerify(
      userId: $userId
      code: $code
      email: $email
      phone: $phone
    ) {
      _id
      isVerified
      isEmailVerified
      isPhoneVerified
    }
  }
`;

export type ClientPortalUserVerifyVariables = {
  userId?: string;
  code: string;
  email?: string;
  phone?: string;
};

export type ClientPortalUserVerifyData = {
  clientPortalUserVerify: CPUser;
};
