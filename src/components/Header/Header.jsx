"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { BiExit, BiUserCircle } from "react-icons/bi";
import useCookie from "@/hooks/useCookie";

function Header({ hasLoggedIn }) {
  const cookieValue = useCookie();

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src="/assets/logo.svg" fill objectFit="contain" alt="logo" />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/itineraries">Itineraries</Link>
          </li>

          {!cookieValue ? (
            <li className={styles.navItemIcon}>
              <Link href="/login">
                <BiUserCircle />
              </Link>
            </li>
          ) : (
            <>
              <li className={styles.navItem}>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className={styles.navItemIcon}>
                <Link href="/logout">
                  <BiExit />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
