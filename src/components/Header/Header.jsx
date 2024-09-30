import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";

function Header(props) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src="/assets/logo.svg" fill objectFit="contain" alt="logo"/>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          <Link href="/" className={styles.navItem}>Home</Link>
          <Link href="/about" className={styles.navItem}>About</Link>
          <Link href="/itineraries" className={styles.navItem}>Itineraries</Link>
          <Link href="/login" className={styles.navItemIcon}><BiUserCircle/></Link>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
