"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./hamburgerMenu.module.css"
import {Menu, X} from "lucide-react"

export default function HamburgerMenu () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.hamburgerMenu}>
            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
            {isOpen && (
                <div className={styles.menuContent}>
                        <Link href="/">Ana səhifə</Link>
                        <Link href="#">Haqqımızda</Link>
                        <Link href="#">Laboratoriyalar</Link>
                        <Link href="#">Mərkəzlər</Link>
                        <Link href="#">Xəbərlər</Link>
                        <Link href="#">Günlük</Link>
                        <Link href="#">Əlaqə</Link>
                </div>
            )}
            </div>
    )
}

