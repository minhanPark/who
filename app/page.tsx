import styles from "./page.module.scss";

export default function Home() {
  console.log(styles);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles["name-wrapper"]}>
          <h2>RunningWater</h2>
          <h2>RunningWater</h2>
        </div>
        <div className={styles["box-wrapper"]}>
          <div className={styles.box} />
        </div>
      </div>
    </main>
  );
}
