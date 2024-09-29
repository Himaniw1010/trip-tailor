import Image from "next/image";
import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.wrapper}>
      {/* <div className={styles.insideWrapper}> */}
      <div className={styles.logo}>
        <Image
          src="/assets/logo_white.svg"
          fill
          objectFit="contain"
          alt="logo"
        />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Itineraries</li>
        </ul>
      </nav>
      <p className={styles.copyright}>
        Copyright @ 2024 TripTailor Pvt. Ltd. | All Rights Reserved
      </p>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
