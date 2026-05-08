import { gql } from "@apollo/client";
import type { CPUser } from "../queries/currentUser";

export type CPUserType = "customer" | "company";

export type ClientPortalUserRegisterInput = {
  phone?: string;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  userType?: CPUserType;
  code?: string;
  propertiesData?: Record<string, unknown>;
};

export const CLIENT_PORTAL_USER_REGISTER = gql`
  mutation ClientPortalUserRegister(
    $phone: String
    $email: String
    $username: String
    $password: String
    $firstName: String
    $lastName: String
    $userType: CPUserType
    $code: String
    $propertiesData: JSON
  ) {
    clientPortalUserRegister(
      phone: $phone
      email: $email
      username: $username
      password: $password
      firstName: $firstName
      lastName: $lastName
      userType: $userType
      code: $code
      propertiesData: $propertiesData
    ) {
      _id
      email
      phone
      username
      firstName
      lastName
      isVerified
      isEmailVerified
      isPhoneVerified
      createdAt
    }
  }
`;

export type ClientPortalUserRegisterVariables = ClientPortalUserRegisterInput;

export type ClientPortalUserRegisterData = {
  clientPortalUserRegister: CPUser;
};
