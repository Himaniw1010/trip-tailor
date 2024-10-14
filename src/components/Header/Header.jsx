"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { BiExit, BiMenuAltRight, BiPlus, BiUserCircle } from "react-icons/bi";
import useCookie from "@/hooks/useCookie";
import useDeviceType from "@/hooks/useDeviceType";
import { useEffect, useState } from "react";

function Header() {

  const [open, setOpen] = useState(false)
  const cookieValue = useCookie();
  const isMobile = useDeviceType() === "mobile";
  const openMenu = () => {
    setOpen(true)
  }
  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src="/assets/logo.svg" fill objectFit="contain" alt="logo" />
      </div>
      {isMobile && <div className={styles.hamburger} onClick={openMenu}>
        <BiMenuAltRight />
      </div>}
      <nav className={`${styles.navbar} ${isMobile && styles.mobileNav} ${isMobile && open && styles.open}`}>
      {isMobile && <div className={styles.close} onClick={closeMenu}>
        <BiPlus />
      </div>}
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/itineraries">Itineraries</Link>
          </li>

          {!cookieValue ? (
            <li className={styles.navItemIcon} onClick={closeMenu}>
              <Link href="/login">
                <BiUserCircle />
              </Link>
            </li>
          ) : (
            <>
              <li className={styles.navItem} onClick={closeMenu}>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className={isMobile ? styles.navItem :styles.navItemIcon} onClick={closeMenu}>
                <Link href="/logout" prefetch={false}>
                  {isMobile ? "Logout" :<BiExit />}
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
