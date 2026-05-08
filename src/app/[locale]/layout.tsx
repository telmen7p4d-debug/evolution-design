import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "evolution - Luxury Fashion",
    template: "%s | evolution",
  },
  description: "Redefining modern luxury. Contemporary fashion where craftsmanship meets avant-garde design.",
  keywords: ["luxury", "fashion", "evolution", "designer", "contemporary"],
  authors: [{ name: "evolution" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "evolution",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-900 text-foreground font-sans">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>
            <SmoothScroll>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </SmoothScroll>
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
