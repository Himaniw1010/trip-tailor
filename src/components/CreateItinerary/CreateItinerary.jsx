"use client";
import styles from "./CreateItinerary.module.css";
import { useFormState, useFormStatus } from "react-dom";
import { addItinerary } from "@/app/actions/auth";
import { useEffect, useRef, useState } from "react";
import DayContainer from "../DayContainer/DayContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {generateArray} from "@/utils/generateArray";

export default function CreateItinerary() {

  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(['Day-1']);
  }, []);
  const handleDurationChange = (e) => {
    const dayCount = parseInt(e.target.value);
    console.log(dayCount)
    
    setDays((prev) => {
      const newDays = [...prev];
      if (dayCount > prev.length) {
        for (let i = prev.length + 1; i <= dayCount; i++) {
          newDays.push(`Day-${i}`);
        }
      } else if (dayCount < prev.length) {
        newDays.splice(dayCount);
      }
      return newDays;
    });

    console.log(days)
  };

  const formFields = [
    { label: "Title", type: "text", placeholder: "Enter Title", col: 4 },
    { label: "Country", type: "text", placeholder: "Enter Country", col: 4 },
    {
      label: "Duration",
      type: "number",
      min: 1,
      placeholder: "1",
      value:days.length ,
      col: 4,
      onChange: handleDurationChange,
    },
    { label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 },
  ];
  const [state, action] = useFormState(addItinerary, undefined);
  // const formRef = useRef();
  
  useEffect(() => {
    console.log(state)
  }, [state]);


  return (
    <div className={styles.wrapper}>
      <h2>Create Itinerary</h2>
      <form action={action} className={styles.formContainer}>
        {/* Print Basic Fields */}
        {formFields.map((item, index) => {
          return (
            <Input key={"i"+ index}{...item} state={state} />
          );
        })}

        {/* Print Days */}
        { days.map((item) => {
          return <DayContainer key={item} n={item} state={state}/>;
        })}

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} variant="red" size="lg" label="Sign Up" buttonType="submit" type="button" />
  );
}
