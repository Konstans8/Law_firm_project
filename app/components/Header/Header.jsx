import Image from 'next/image'
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
    return(
        <header className={styles.header}>
            <div>
                <Image
                    src="/Logo.png"
                    width={300}
                    height={60}
                    alt="Logo"
                />
            </div>
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