import React from "react";
import Header from "@/components/header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
