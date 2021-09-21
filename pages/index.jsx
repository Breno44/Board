import styles from "../styles/Home.module.css";
import Houses from "../components/Houses";

export default function Home() {
  return (
    <div className={styles.container}>
      <Houses />
    </div>
  );
}
