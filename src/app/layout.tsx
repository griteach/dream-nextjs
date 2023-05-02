import { Metadata } from "next";
import Link from "next/link";
import { parseJsonSourceFileConfigFileContent } from "typescript";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Dev Note",
  description: "My Dev Note",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <Link href="/">
            <h1>Dev Note</h1>
          </Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
