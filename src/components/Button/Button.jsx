import Link from "next/link";
import styles from "./Button.module.css";

function Button({
  label,
  type = "primary",
  size = "md",
  icon,
  link = "/",
  isSubmit = false
}) {

  {
    return !isSubmit ? (<Link className={`${styles.wrapper} ${styles[`btn-${type}`]} ${styles[`btn-${size}`]}`} href={link}>
      {label && label}
      {icon && icon}
    </Link>) : (<button type="submit" className={`${styles.wrapper} ${styles[`btn-${type}`]} ${styles[`btn-${size}`]}`}>{label && label}
      {icon && icon}</button>)
  }
};

export default Button;
