import styles from "../styles/Home.module.css";
import Line from "../components/Line";

export default function Home() {
  return (
    <div className={styles.container}>
      <Line />
      <Line reverse />
      <Line />
      <Line reverse />
      <Line />
      <Line reverse />
      <Line />
      <Line reverse />
    </div>
  );
}
