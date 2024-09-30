import Link from "next/link";
import styles from "./Button.module.css";

function Button({
  label,
  type = "primary",
  size = "md",
  icon,
  link = "/",
}) {
  return (
    <Link className={`${styles.wrapper} ${styles[`btn-${type}`]} ${styles[`btn-${size}`]}`} href={link}>
      {label && label}
      {icon && icon}
    </Link>
  );
}

export default Button;
