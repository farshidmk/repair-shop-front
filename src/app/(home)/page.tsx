"use client";

import HoverButton from "@/components/hoverButton/HoverButton";

export default function Home() {
  return (
    <div className="w-full h-full mx-auto max-w-3xl flex justify-center items-center">
      <div className="flex flex-col  justify-center w-full md:max-w-md h-full my-auto max-h-96 ">
        <HoverButton link="auth/login" text="ورود" />
      </div>
    </div>
  );
}
