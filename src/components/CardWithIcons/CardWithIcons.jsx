import styles from "./CardWithIcons.module.css";
import { BiFoodMenu, BiMapAlt, BiCheckCircle, BiUser } from "react-icons/bi";

function CardWithIcons({ heading }) {
  const icons = [
    {
      icon: <BiFoodMenu />,
      label: "Effortless planning",
    },
    {
      icon: <BiMapAlt />,
      label: "Customisable itineraries",
    },
    {
      icon: <BiCheckCircle />,
      label: "Easy Management",
    },
    {
      icon: <BiUser />,
      label: "Share your journey",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h2>{heading}</h2>
      <ul className={styles.list}>{icons.map(({ icon, label }) =>
        <li key={label} className={styles.listItem}>
          <div className={styles.icon}>
            {icon}
          </div>
          <span>
            {label}
          </span>
        </li>
      )}</ul>
    </div>
  );
}

export default CardWithIcons;
