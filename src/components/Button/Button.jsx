import Link from "next/link";
import styles from "./Button.module.css";

function Button({
  label = "button",
  size = "md",
  hasIcon = false,
  icon,
  link = "/",
}) {
  return (
    <Link className={`${styles.wrapper} ${styles[`btn-${size}`]}`} href={link}>
      {label}
      {icon && icon}
    </Link>
  );
}

export default Button;
