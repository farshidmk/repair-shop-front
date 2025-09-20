import { Card } from "@mui/material";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen  p-4">
        <Card className="w-full max-w-xl shadow-2xl bg-gray-400/90">{children}</Card>
      </div>
    </main>
  );
};

export default AuthLayout;
