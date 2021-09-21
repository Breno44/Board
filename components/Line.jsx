import Houses from "../components/Houses";
import styles from "../styles/Line.module.css";

export default function Line(props) {
  return (
    <div className={styles.line} style={{ flexDirection: props.reverse ? "row-reverse" : "row" }}>
      <Houses />
      <Houses preta />
      <Houses />
      <Houses preta />
      <Houses />
      <Houses preta />
      <Houses />
      <Houses preta />
    </div>
  );
}
