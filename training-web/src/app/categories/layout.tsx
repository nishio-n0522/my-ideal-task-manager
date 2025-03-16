import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
