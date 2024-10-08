"use client";
import { BiPlus } from "react-icons/bi";
import ActivityForm from "../ActivityForm/ActivityForm";
import Button from "../Button/Button";
import styles from "./DayContainer.module.css";
import {  useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function DayContainer({ n }) {
  const [activityCount, setActivityCount] = useState([`Day_${n}__Activity_${uuidv4()}`])
  const handleAddActivity = () => {
    setActivityCount((prev) => {
      const newActivityId = `Day_${n}__Activity_${uuidv4()}`;
      console.log(`Added activity: ${newActivityId}`);
      return [...prev, newActivityId];
    });
  };
  const handleDeleteActivity = (activityId) => {
    setActivityCount((prev) => {
      const updatedCount = prev.filter(id => id !== activityId);
      console.log(`Deleted activity: ${activityId}`);
      console.log(updatedCount);
      return updatedCount;
    });
  };
  return (
    <div className={styles.wrapper}>
      <fieldset className={styles.fieldset}>
        <Button label="Add Activity" buttonType="button" type="button" size="sm" variant="red" icon={<BiPlus />} className={styles.add_activity} onClick={handleAddActivity} />
        <legend>Day {n}:</legend>
        {activityCount.map((item, i) => {
          return <ActivityForm id={item} key={item} onDeleteClick={handleDeleteActivity} />;
        })}


      </fieldset>

    </div>
  );
}
