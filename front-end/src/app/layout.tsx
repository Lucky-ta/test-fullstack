import type { Metadata } from "next";
import { StyledComponentsRegistry } from "../../styled-registry";

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
    <StyledComponentsRegistry>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
