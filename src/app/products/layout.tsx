import Link from "next/link";
import styles from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link className={styles.Link} href="/women">
          여성옷
        </Link>
        <Link className={styles.Link} href="/men">
          남성옷
        </Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
