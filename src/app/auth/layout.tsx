import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen  p-4">
        <div className="w-full max-w-xl shadow-2xl rounded-3xl">{children}</div>
      </div>
    </main>
  );
};

export default AuthLayout;
