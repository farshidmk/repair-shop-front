import { User } from "@/types/user";

export type LoginWithPasswordForm = {
  phoneNumber: string;
  password: string;
};

export type LoginWithOTPForm = {
  phoneNumber: string;
  otp?: string;
};

export type LoginResponse = User & {
  token: string;
};
