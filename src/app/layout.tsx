import type { Metadata } from "next";
import "./globals.css";
import { vazirFont } from "@/ui/font";
import ApplicationProviders from "@/providers/ApplicationProviders";

export const metadata: Metadata = {
  title: "برنامه مدیریت تعمیرگاه",
  description: "مدیریت تعمیرگاه ماشین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="bg-primary">
      <body className={`${vazirFont.className} antialiased`}>
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
}
