
import Button from "../Button/Button";
import styles from "./Form.module.css";
function Form({ formStructure, action }) {
  const { name, fields, isRequired } = formStructure

  return (
    <div className={styles.wrapper}>
      <h2>{name}</h2>
      <form action={action} method="post" className={styles.form}>
        {fields.map((field) => {
          return (
            <div key={field.label} className={styles.form_group}>
              <label htmlFor="email">{field.label}</label>
              <input id="email" name="email" type={field.type} required={field.isRequired} />
            </div>
          )
        })}
        <Button isSubmit={true} label="Submit" type="red" size="xl" />
      </form>
    </div>
  );
}



export default Form;
