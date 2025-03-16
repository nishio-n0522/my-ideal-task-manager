import "../styles/globals.css";
import { Nav } from "./_components/Nav";
import styles from "./layout.module.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <Nav />
            <main className={styles.main}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
