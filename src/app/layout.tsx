import "@/assets/fontawesome-6.1.2/css/all.min.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import ProviderWrapper from "./ProviderWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Blog",
  description: "Anime Blog",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  authors: { name: "Salih Topcu", url: "https://salihtopcu.com" },
  alternates: {
    canonical: "https://salihtopcu.com",
    languages: {
      "en-US": "https://salihtopcu.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 bg-slate-400">
        <StyledComponentsRegistry>
          <ProviderWrapper>
            <Header>{children}</Header>
          </ProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
