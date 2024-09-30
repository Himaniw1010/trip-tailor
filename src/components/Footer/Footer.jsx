import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

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
        <Link href="/" className={styles.navItem}>Home</Link>
        <Link href="/about" className={styles.navItem}>About</Link>
        <Link href="/itineraries" className={styles.navItem}>Itineraries</Link>
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
