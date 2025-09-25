export interface NavItem {
  name: string;
  path: string;
  subItems?: NavItem[]
}