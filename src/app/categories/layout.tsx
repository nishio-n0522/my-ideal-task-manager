import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function ({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
