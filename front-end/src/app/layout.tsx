import type { Metadata } from "next";
import { StyledComponentsRegistry } from "../../styled-registry";
import { QueryClientProviderWrapper } from "settings";

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
        <body>
          <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
