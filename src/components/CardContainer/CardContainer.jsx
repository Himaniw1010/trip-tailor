
"use client";
import { BiPlus } from "react-icons/bi";
import Button from "../Button/Button";
import styles from "./CardContainer.module.css";
import HorizontalCard from "../HorizontalCard/HorizontalCard";

function CardContainer({ heading, cards }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{heading}</h2>
        <Button type="primary" size="md" label={"Create"} variant="red" icon={<BiPlus />} link="/add-itinerary" />
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card) => {
          return <HorizontalCard card={card} />
        })}
      </div>

    </div>
  );
}



export default CardContainer;
