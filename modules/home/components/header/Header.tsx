"use client";

import Link from "next/link";
import Logo from "./Logo";
import ActiveLink from "@/shared/components/navigation/ActiveLink";
import HamburgerMenu from "@/shared/components/navigation/HamburgerMenu";
import styles from "./header.module.css";

export default function Header() {
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Logo width={120} height={60} />
        </Link>

        <nav className={styles.navLinks}>
          {[
            { name: "Ana səhifə", path: "/" },
            { name: "Haqqımızda", path: "/about" },
            { name: "Laboratoriyalar", path: "/labs" },
            { name: "Mərkəzlər", path: "/centers" },
            { name: "Xəbərlər", path: "/news" },
            { name: "Günlük", path: "/diary" },
            { name: "Əlaqə", path: "/contact" },
          ].map((link) => (
            <ActiveLink key={link.path} href={link.path}>
              {link.name}
            </ActiveLink>
          ))}
        </nav>

        <div className={styles.buttons}>
          <button className={styles.langBtn}>EN</button>
          <button className={styles.registerBtn}>Qeydiyyat</button>
        
        </div>
        <HamburgerMenu/>
      </header>
    </div>
  );
}



