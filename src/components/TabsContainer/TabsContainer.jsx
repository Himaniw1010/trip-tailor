"use client";
import { BiPlus } from "react-icons/bi";
import ActivityForm from "../ActivityForm/ActivityForm";
import Button from "../Button/Button";
import styles from "./TabsContainer.module.css";
import {  useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TabsContainer({days }) {
  console.log()
  return (
    <div className={styles.wrapper}>
      {Object.keys(days).map((day, i) => {
        days[day]
      })}

    </div>
  );
}
