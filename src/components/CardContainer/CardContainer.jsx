"use client";
import { BiPlus } from "react-icons/bi";
import Button from "../Button/Button";
import styles from "./CardContainer.module.css";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import Card from "../Card/Card";

function CardContainer({ heading, cards, type = "list" }) {
  console.log(cards);
  return (
    <div className={styles.wrapper}>
      {heading && (
        <div className={styles.header}>
          <h2>{heading}</h2>
          <Button
            type="primary"
            size="md"
            label={"Create"}
            variant="red"
            icon={<BiPlus />}
            link="/add-itinerary"
          />
        </div>
      )}
      <div className={`${styles.cardsContainer} ${type === "grid" && styles.grid}`}>
        {cards.map((card) => {
          return type === "list" ? <HorizontalCard card={card} /> : <Card data={card}/>;
        })}
      </div>
    </div>
  );
}

export default CardContainer;
