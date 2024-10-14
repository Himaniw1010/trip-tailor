"use client";
import { BiPlus } from "react-icons/bi";
import ActivityForm from "../ActivityForm/ActivityForm";
import Button from "../Button/Button";
import styles from "./EditDayContainer.module.css";
import {  useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EditActivityForm from "../EditActivityForm/EditActivityForm";

export default function EditDayContainer({ data, n, state }) {
 
  const [activityCount, setActivityCount] = useState(null)
  useEffect(() => {
    data &&  setActivityCount(Object.keys(data).map(day => `${n}__${day}`))
  }, [])
  const handleAddActivity = () => {
    setActivityCount((prev) => {
      //  console.log(prev)
      const newActivityId = `${n}__Activity-${uuidv4()}`;
      console.log(`Added activity: ${newActivityId}`);
      return prev ? [...prev, newActivityId] : [newActivityId];
    });
  };
  const handleDeleteActivity = (activityId) => {
    setActivityCount((prev) => {
      const updatedCount = prev.filter(id => id !== activityId);
      console.log(`Deleted activity: ${activityId}`);
      return updatedCount;
    });
  };
  return (
    <div className={styles.wrapper}>
      <fieldset className={styles.fieldset}>
        <Button label="Add Activity" buttonType="button" type="button" size="sm" variant="red" icon={<BiPlus />} className={styles.add_activity} onClick={handleAddActivity} />
        <legend>{n}:</legend>
        {activityCount && activityCount.map((item, i) => {
          console.log(item)
          return <EditActivityForm data={data ? data[item.split("__")[1]] : {}} state={state} id={item} key={item} onDeleteClick={handleDeleteActivity} />;
        })}
      </fieldset>
    </div>
  );
}
