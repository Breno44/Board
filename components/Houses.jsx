import styles from "../styles/Houses.module.css";

export default function Houses(props) {
  return (
    <div
      style={{
        backgroundColor: props.preta ? "#000" : "#fff",
      }}
      className={styles.houses}
    ></div>
  );
}
