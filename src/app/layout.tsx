import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Html, Head, Main, NextScript } from 'next/document'

export const metadata: Metadata = {
  title: "Notcoin Classic",
  description: "Notcoin Classic Telegram app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html>
        <Head>
          <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {children}
          <Main />
          <NextScript />
        </body>
      </Html>
  );
}