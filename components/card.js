import styles from "../styles/components/Card.module.css";

export default function Card({ card, index, clickhandler }) {
  return (
    <div className={styles.cardCont} onClick={() => clickhandler(index)}>
      <div>{card.name}</div>
    </div>
  );
}
