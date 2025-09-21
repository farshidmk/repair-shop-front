"use client";

import { Button, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpLoginForm from "./_components/OtpLoginForm";
import PasswordLoginForm from "./_components/PasswordLoginForm";

const LoginPage = () => {
  const [loginType, setLoginType] = useState<"username" | "OTP">("username");
  const router = useRouter();
  return (
    <div>
      <Typography variant="h6" textAlign={"center"} color="primary">
        ورود به سایت
      </Typography>
      <CardContent>
        {loginType === "username" ? <PasswordLoginForm /> : <OtpLoginForm />}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => setLoginType(loginType === "OTP" ? "username" : "OTP")}
          >
            ورود با {loginType === "OTP" ? "نام کربری" : "تلفن همراه"}
          </Button>
          <Link href={"/auth/sign-up"} className="w-full">
            <Button variant="outlined" fullWidth color="success">
              ثبت نام{" "}
            </Button>
          </Link>
        </div>
      </CardContent>
    </div>
  );
};

export default LoginPage;
