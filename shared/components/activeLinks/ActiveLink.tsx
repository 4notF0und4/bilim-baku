"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./activeLink.module.css";

interface ActiveLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function ActiveLink({ href, children }: ActiveLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`${styles.navLink} ${isActive ? styles.active : ""}`}>
            {children}
            {isActive && <span className={styles.activeDot}></span>}
        </Link>
    );
}



