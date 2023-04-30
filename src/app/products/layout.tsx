import styles from "./layout.module.css";

export default function ProductLayout({
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
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <a href="">Contact</a>
            <a href="">About</a>
          </nav>
        </header>
        <menu className={styles.menu}>
          <div>여성옷</div>
          <div>남성옷</div>
        </menu>
        {children}
      </body>
    </html>
  );
}
