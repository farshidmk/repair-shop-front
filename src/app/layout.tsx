import type { Metadata } from "next";
import "./globals.css";
import { vazirFont } from "@/ui/font";
import ApplicationProviders from "@/providers/ApplicationProviders";

declare module "axios" {
  // Override AxiosRequestConfig to restrict method to 'post'
  interface AxiosRequestConfig {
    method?: Method;
  }
}

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
      <body className={`${vazirFont.className} antialiased`} suppressHydrationWarning>
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/main-bg.webp')" }}
        >
          <div className="absolute inset-0 z-10 bg-black/70  pointer-events-none" />
          <div className="relative z-20 h-full">
            <ApplicationProviders>{children}</ApplicationProviders>
          </div>
        </div>
      </body>
    </html>
  );
}
