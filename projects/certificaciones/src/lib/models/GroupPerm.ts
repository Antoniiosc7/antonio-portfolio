export interface GroupPerm {
  id?: number;
  name: string;
  permission: string;
  value: boolean;
  server: string;
  world: string;
  expiry: string;
  contexts: string;
}
