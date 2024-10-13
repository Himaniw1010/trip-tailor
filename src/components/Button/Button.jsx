import Link from "next/link";
import styles from "./Button.module.css";

function Button({
  id,
  label,
  type = "link",
  variant = "primary",
  size = "md",
  icon,
  link = "/",
  buttonType = "submit",
  className,
  onClick
}) {

  {
    return type != "button" ? (<Link id={id} className={`${styles.wrapper} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${className}`} href={link}>
      {label && label}
      {icon && icon}
    </Link>) : (<button id={id}type={buttonType} className={`${styles.wrapper} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${className}`} onClick={onClick}>{label && label}
      {icon && icon}</button>)
  }
};

export default Button;
