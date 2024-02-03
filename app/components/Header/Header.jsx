"use client";

import Image from 'next/image'
import Link from 'next/link';
import styles from './Header.module.scss';
import Burger from '../Burger/Burger';
import { useState } from 'react';



export default function Header() {

    const [menuActive, setMenuActive] = useState(false)

    return(
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <Image className={styles.logo}
                    src="/Logo.png"
                    width={300}
                    height={60}
                    alt="Logo"
                />
            </div>
            <div className={styles.media}>
                <a href="tel:+48777777777">+48 777 777 777</a>
            </div>
            <button className={styles.open} onClick={() => setMenuActive(!menuActive) }>Menu</button>
            <Burger active={menuActive} setActive={setMenuActive}/>
            <nav className={styles.navigation}>
                <Link className={styles.link} href='/'>KANCELARIA</Link>
                <Link className={styles.link} href='/services'>USŁUGI</Link>
                <Link className={styles.link} href='/specialization'>SPECJALIZACJA</Link>
                <Link className={styles.link} href='/about'>O NAS</Link>
                <Link className={styles.link} href='/contact'>KONTAKT</Link>
                <a href="tel:+48777777777">+48 777 777 777</a>
            </nav>
        </header>
    )
}