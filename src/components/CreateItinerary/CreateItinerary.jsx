"use client";
import styles from "./CreateItinerary.module.css";
import { useFormState, useFormStatus } from "react-dom";
import { signup } from "@/app/actions/auth";
import { useEffect, useRef, useState } from "react";
import DayContainer from "../DayContainer/DayContainer";

export default function CreateItinerary() {
  const [dayCount, setDayCount] = useState(1);
  const handleDurationChange = (e) => {
    setDayCount(e.target.value);
  };
  const fillArray = (n) => {
    return (

      Array(Number(n))
        .fill()
        .map((_, i) => i + 1)
    );
  };
  const formFields = [
    { label: "Title", type: "text", placeholder: "Enter Title", col: 4 },
    { label: "Country", type: "text", placeholder: "Enter Country", col: 4 },
    {
      label: "Duration",
      type: "number",
      min: 1,
      placeholder: "1",
      col: 4,
      onChange: handleDurationChange,
    },
    { label: "Budget", type: "text", placeholder: "Enter Budget($)", col: 4 },
  ];
  const [state, action] = useFormState(signup, undefined);
  const formRef = useRef();
  useEffect(() => {
    if (state == true) {
      formRef.current.reset();
    }
  }, [state]);
  return (
    <div className={styles.wrapper}>
      <h2>Create Itinerary</h2>
      <form ref={formRef} action={action} className={styles.formContainer}>
        {/* Print Basic Fields */}
        {formFields.map((item, index) => {
          return (
            <div
              key={index + item.label}
              className={`${styles.form_group} ${styles[`col-${item.col}`]}`}
            >
              <label htmlFor={item.label.toLowerCase()}>{item.label}</label>
              <input
                id={item.label.toLowerCase()}
                type={item.type}
                name={item.label.toLowerCase()}
                placeholder={item?.placeholder}
                onChange={item.onChange}
              />
              {state?.errors[[item.label.toLowerCase()]] && (
                <span>{state.errors[item.label.toLowerCase()]}</span>
              )}
            </div>
          );
        })}

        {/* Print Days */}
        {dayCount > 0 && fillArray(dayCount).map((item) => {
          return <DayContainer n={item}/>;
        })}

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      Sign Up
    </button>
  );
}
