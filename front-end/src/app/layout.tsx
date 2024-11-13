import type { Metadata } from "next";
import { StyledComponentsRegistry } from "../../styled-registry";
import { QueryClientProviderWrapper } from "settings";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "UOL - Teste",
  description: "UOL - Teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProviderWrapper>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </QueryClientProviderWrapper>
        <ToastContainer />
      </body>
    </html>
  );
}
