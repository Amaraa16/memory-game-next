import styles from "../styles/Home.module.css";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <div className={styles.outCont}>
      <h1 className={styles.header}>Memory Game</h1>
      <Cards />
    </div>
  );
}
