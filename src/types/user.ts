export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UserRole;
};

export enum UserRole {
  ADMIN = "ADMIN",
  MECHANIC = "MECHANIC",
  CUSTOMER = "CUSTOMER",
}
