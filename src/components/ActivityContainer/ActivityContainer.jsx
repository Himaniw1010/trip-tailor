import Button from "../Button/Button";
import styles from "./ActivityContainer.module.css";
import { useEffect, useState } from "react";
function formatTime(timeString) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
}
export default function ActivityContainer({ activity }) {
  // console.log(activity);
  return (
    <div className={styles.wrapper}>
      <div className={styles.metaContainer}>
        <span className={styles.meta}>{formatTime(activity.time)}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{activity.activity_title}</h3>
        <p>{activity.description}</p>
      </div>
    </div>
  );
}
