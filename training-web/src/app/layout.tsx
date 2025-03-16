import "../styles/globals.css";

import { Footer } from "./_components/Footer";
import Header from "./_components/Header";
import Nav from "./_components/Nav";
import styles from "./layout.module.css";

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
            <div className={styles.main}>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
