"use client";
import styles from "./Input.module.css";


export default function Input({
  label = "Title",
  type = "text",
  placeholder = "Enter Title",
  col = 4,
  onChange = () => { },
  state
}) {

  return (
    <div
      className={`${styles.form_group} ${styles[`col-${col}`]}`}
    >
      <label htmlFor={label.toLowerCase()}>{label}</label>
      {type == "textarea" ?
        <textarea id={label.toLowerCase()}
          type={type}
          name={label.toLowerCase()}
          placeholder={placeholder}
          onChange={onChange} /> :
        <input
          id={label.toLowerCase()}
          type={type}
          name={label.toLowerCase()}
          placeholder={placeholder}
          onChange={onChange}
        />}
      {state?.errors[[item.label.toLowerCase()]] && (
        <span>{state.errors[item.label.toLowerCase()]}</span>
      )}
    </div>
  );
}
