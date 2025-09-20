"use client";

import React, { useState } from "react";
import PasswordLoginForm from "./_components/PasswordLoginForm";

import { useRouter } from "next/navigation";
import OtpLoginForm from "./_components/OtpLoginForm";
import { Button, Card, CardContent, CardHeader } from "@mui/material";

const LoginPage = () => {
  const [loginType, setLoginType] = useState<"username" | "OTP">("username");
  const router = useRouter();
  return (
    <Card>
      <CardHeader>ورود به سایت </CardHeader>
      <CardContent>
        {loginType === "username" ? <PasswordLoginForm /> : <OtpLoginForm />}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
          <Button variant="outlined" onClick={() => setLoginType(loginType === "OTP" ? "username" : "OTP")}>
            ورود با {loginType === "OTP" ? "نام کربری" : "تلفن همراه"}
          </Button>
          <Button variant="outlined" onClick={() => router.push("/auth/sign-up")}>
            ثبت نام{" "}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
