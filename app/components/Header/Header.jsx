"use client";

import Image from 'next/image'
import Link from 'next/link';
import styles from './Header.module.scss';
import Burger from '../Burger/Burger';
import { useState } from 'react';
import { motion } from 'framer-motion'


export default function Header() {

    const [menuActive, setMenuActive] = useState(false)

    return(
        <motion.header className={styles.header}
        initial={{
            // x: -1000,
            opacity: 0
        }}
        animate={{
            // x: 0,
            opacity: 1,
            scale: [1, 2, 2, 1, 1]
        }}
        whileInView={{ opacity: 1 }}
        transition={{
            
        }}
        >
            <div className={styles.logo_container}>
            <Link className={styles.link} href='/'>
                <Image className={styles.logo}
                    src="/Logo.png"
                    width={300}
                    height={60}
                    alt="Logo"
                />
            </Link>
            </div>
            <div className={styles.media}>
                <a href="tel:+48777777777">+48 777 777 777</a>
            </div>
            <button className={styles.open} onClick={() => setMenuActive(!menuActive)}>Menu</button>
            <Burger active={menuActive} setActive={setMenuActive}/>
            <nav className={styles.navigation}>
                <Link className={styles.link} href='/'>KANCELARIA</Link>
                <Link className={styles.link} href='/services'>USŁUGI</Link>
                <Link className={styles.link} href='/specialization'>SPECJALIZACJA</Link>
                <Link className={styles.link} href='/about'>O NAS</Link>
                <Link className={styles.link} href='/contact'>KONTAKT</Link>
                <a href="tel:+48505966643">+48 505 966 643</a>
            </nav>
        </motion.header>
    )
}