"use client";
import { BiPlus } from "react-icons/bi";
import Button from "../Button/Button";
import styles from "./CardContainer.module.css";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import Card from "../Card/Card";
import useDeviceType from "@/hooks/useDeviceType";

function CardContainer({ heading, cards, type = "list" }) {
  const devideType = useDeviceType()
  return (
    <div className={styles.wrapper}>
      {heading && (
        <div className={styles.header}>
          <h2>{heading}</h2>
          <Button
            type="primary"
            size={devideType == "mobile" ? "sm" : devideType == "tablet" ? "md" : "lg"}
            label={"Create"}
            variant="red"
            icon={<BiPlus />}
            link="/add-itinerary"
          />
        </div>
      )}
      <div className={`${styles.cardsContainer} ${type === "grid" && styles.grid}`}>
        {cards.map((card, i) => {
          return type === "list" ? <HorizontalCard key={`listItem_${i}`} card={card} /> : <Card key={`listItem_${i}`} data={card}/>;
        })}
      </div>
    </div>
  );
}

export default CardContainer;
