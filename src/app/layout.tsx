import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Parker & Sons M.D. | Premium Lawn Care Service',
  description: 'Expert, professional lawn maintenance and landscaping services by Parker & Sons M.D. Experience the gold standard in property care.',
  openGraph: {
    "title": "Parker & Sons M.D. Lawn Care",
    "description": "Premium lawn maintenance for discerning homeowners and commercial properties.",
    "siteName": "Parker & Sons M.D."
  },
};

const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
