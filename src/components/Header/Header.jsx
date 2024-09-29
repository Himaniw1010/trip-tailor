import Image from "next/image";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src="/assets/logo.svg" fill objectFit="contain" alt="logo"/>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Itineraries</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
