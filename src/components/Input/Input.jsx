"use client";
import styles from "./Input.module.css";


export default function Input({
  label = "Title",
  type = "text",
  placeholder = "Enter Title",
  col = 4,
  value,
  onChange = () => { },
  state,
  id
}) {
  const title = label.toLowerCase().replace(/ /g, '_');
  const identifier = id ? `${id}__${title}` : title;
  return (
    <div
      className={`${styles.form_group} ${styles[`col-${col}`]}`}
    >
      <label htmlFor={identifier}>{label}</label>
      {type == "textarea" ?
        <textarea id={identifier}
          type={type}
          name={identifier}
          placeholder={placeholder}
          onChange={onChange} /> :
        <input
          id={identifier}
          type={type}
          name={identifier}
          placeholder={placeholder}
          onChange={onChange}
          value={value && value}
        />}
      {state?.errors && state?.errors[identifier] && (
        <span>{state.errors[identifier]}</span>
      )}
    </div>
  );
}
