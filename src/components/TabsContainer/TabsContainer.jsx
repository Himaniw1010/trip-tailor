"use client";
import Button from "../Button/Button";
import styles from "./TabsContainer.module.css";
import { useEffect, useState } from "react";
import ActivityContainer from "../ActivityContainer/ActivityContainer";

export default function TabsContainer({ days }) {
  const [activeTab, setActiveTab] = useState(`tab_${1}`);
  const [activeActivities, setActiveActivities] = useState(null);
  const handleTabClick = (e) => {
    // console.log(e.target.id)
    setActiveTab(e.target.id);
  };

  useEffect(() => {
    const day = activeTab.split("_")[1];
    setActiveActivities(days[day]);
  }, [activeTab]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabSelectors}>
        {Object.keys(days).map((day, i) => {
          const id = `tab_${day}`;
          return (
            <Button
              key={id}
              id={id}
              onClick={handleTabClick}
              type="button"
              label={`Day ${day}`}
              className={id === activeTab ? styles.active : ""}
              size="md"
            />
          );
        })}
      </div>
      <div className={styles.content}>
        {activeActivities &&
          Object.keys(activeActivities)
            .map((key) => ({ key, ...activeActivities[key] })) // Convert to an array of objects
            .sort((a, b) => { 
              return new Date(`2023-10-12T${a.time}`) - new Date(`2023-10-12T${b.time}`)}) // Sort by time
            .map((activity, i) => {
              return (
                <ActivityContainer order={activity} key={`activity_${i}`} activity={activity} />
              );
            })}
      </div>
    </div>
  );
}
