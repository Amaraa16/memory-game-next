import { useState, useRef } from "react";
import styles from "../styles/components/Cards.module.css";
import Card from "./card";

export default function Cards() {
  const [cards, setCards] = useState([
    { id: 0, name: "hello", status: "" },
    { id: 0, name: "hello", status: "" },
    { id: 2, name: "greetings", status: "" },
    { id: 2, name: "greetings", status: "" },
    { id: 3, name: "ni hoe", status: "" },
    { id: 3, name: "ni hoe", status: "" },
    { id: 4, name: "konici", status: "" },
    { id: 4, name: "konici", status: "" },
    { id: 5, name: "amraa", status: "" },
    { id: 5, name: "amraa", status: "" },
    { id: 6, name: "sainu", status: "" },
    { id: 6, name: "sainu", status: "" },
    { id: 7, name: "ci sainu", status: "" },
    { id: 7, name: "ci sainu", status: "" },
    { id: 8, name: "bi sain2", status: "" },
    { id: 8, name: "bi sain2", status: "" },
  ]);

  const [previousCardState, setpreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setpreviousCardState(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);

      setTimeout(() => {
        setpreviousCardState(-1);
        cards[previousCardState].status = "";
        cards[currentCard].status = "";
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickhandler = (index) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setpreviousCardState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("card currently selected");
    }
  };

  return (
    <div className={styles.cardsContainer}>
      {cards.map((el, i) => {
        return <Card card={el} key={i} index={i} clickhandler={clickhandler} />;
      })}
    </div>
  );
}
