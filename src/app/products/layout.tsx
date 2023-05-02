import { Metadata } from "next";
import Link from "next/link";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Products Page",
  description: "Products page",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.Link} href="/products/women">
          여성옷
        </Link>
        <Link className={styles.Link} href="/products/men">
          남성옷
        </Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
