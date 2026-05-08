import { gql } from "@apollo/client";
import type { MenuItem } from "../queries/menu";

export type MenuItemInput = {
  parentId?: string;
  clientPortalId?: string;
  webId?: string;
  label?: string;
  contentType?: string;
  contentTypeId?: string;
  kind?: string;
  icon?: string;
  url?: string;
  order?: number;
  target?: string;
  language?: string;
};

export const CP_CMS_ADD_MENU = gql`
  mutation CpCmsAddMenu($input: MenuItemInput!) {
    cpCmsAddMenu(input: $input) {
      _id
      clientPortalId
      webId
      parentId
      label
      contentType
      contentTypeId
      kind
      icon
      url
      order
      target
    }
  }
`;

export type CpCmsAddMenuVariables = {
  input: MenuItemInput;
};

export type CpCmsAddMenuData = {
  cpCmsAddMenu: MenuItem;
};
