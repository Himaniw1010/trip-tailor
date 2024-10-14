"use client";
import styles from "./EditItinerary.module.css";
import { useFormState, useFormStatus } from "react-dom";
import { addItinerary, editItinerary } from "@/app/actions/auth";
import { useEffect, useRef, useState } from "react";
import DayContainer from "../DayContainer/DayContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { generateArray } from "@/utils/generateArray";
import EditDayContainer from "../EditDayContainer/EditDayContainer";
import ImageInput from "../ImageInput/ImageInput";
import useDeviceType from "@/hooks/useDeviceType";

export default function EditItinerary({ data }) {
  const [pageData, setpageData] = useState(data)
  const [days, setDays] = useState([]);
  const deviceType = useDeviceType()

  useEffect(() => {
    const newDays = Object.keys(pageData.days).map((day) => `Day-${day}`)
    setDays(newDays);
  }, []);

  const handleDurationChange = (e) => {
    const dayCount = parseInt(e.target.value);
    // console.log(dayCount)

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

    // console.log(days)
  };

  const [state, action] = useFormState(editItinerary, undefined);
  // const formRef = useRef();

  useEffect(() => {
    console.log(state)
  }, [state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    // console.log(name, value)

    setpageData((prev) => {
      const oldData = { ...prev, [name]: value }
      // console.log(oldData)
      return oldData
    })
  }


  const formFields = [
    { label: "Title", type: "text", placeholder: "Enter Title", col: deviceType == "mobile" ? 12 : 4, value: pageData.title, onChange: handleInputChange },
    { label: "Country", type: "text", placeholder: "Enter Country", col: deviceType == "mobile" ? 12 : 4, value: pageData.country, onChange: handleInputChange },
    {
      label: "Duration",
      type: "number",
      min: 1,
      placeholder: "1",
      value: days.length,
      col: deviceType == "mobile" ? 12 : 4,
      onChange: handleDurationChange,
    },
    { label: "Description", value: pageData.description, type: "textarea", placeholder: "Enter Description", col: 12, onChange: handleInputChange },
  ];
  return (
    <div className={styles.wrapper}>
      <h2>Edit Itinerary</h2>
      <form enctype="multipart/form-data" action={action} className={styles.formContainer}>
      <input type="hidden" name="id" value={pageData.id} />
        {/* Print Basic Fields */}
        
        <div className={styles.flex}>
          <ImageInput state={state} data={data.image} className={styles.image}/>
          <div className={styles.basicFields}>
            {formFields.map((item, index) => {
              return (
                <Input key={"i" + index}{...item} state={state} />
              );
            })}
          </div>
        </div>

        {/* Print Days */}
        {days.map((item, i) => {
          return <EditDayContainer data={pageData.days[i + 1]} key={item} n={item} state={state} />;
        })}

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} variant="red" size="lg" label="Submit" buttonType="submit" type="button" />
  );
}
