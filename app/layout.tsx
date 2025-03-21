import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Jane's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body style={{ overflowX: "hidden" }}>
        <div>
          <Header />
          {/* 🔥 Wrap children in Suspense to handle useSearchParams() */}
          <Suspense fallback={<div>Loading...</div>}>
            <main>{children}</main>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
