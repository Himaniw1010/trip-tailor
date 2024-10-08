import Link from "next/link";
import styles from "./Button.module.css";

function Button({
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
    return type != "button" ? (<Link className={`${styles.wrapper} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${className}`} href={link}>
      {label && label}
      {icon && icon}
    </Link>) : (<button type={buttonType} className={`${styles.wrapper} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${className}`} onClick={onClick}>{label && label}
      {icon && icon}</button>)
  }
};

export default Button;
