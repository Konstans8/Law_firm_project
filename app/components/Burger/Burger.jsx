import Link from 'next/link';
import styles from './Burger.module.scss';


export default function Burger({active, setActive}) {

    return(
        <>
            <div className={active ? (styles.active) : (styles.container)}>
                {/* <button className={styles.exit} onClick={() => setActive(false)}>exit</button> */}
                {/* <nav className={styles.navigation} onClick={e => e.stopPropagation()}> */}
                <nav className={styles.navigation} onClick={e => e.preventDefault()}>
                    <Link className={styles.link} href='/' onClick={() => setActive(false)}>KANCELARIA</Link>
                    <Link className={styles.link} href='/services' onClick={() => setActive(false)}>USŁUGI</Link>
                    <Link className={styles.link} href='/specialization' onClick={() => setActive(false)}>SPECJALIZACJA</Link>
                    <Link className={styles.link} href='/about' onClick={() => setActive(false)}>O NAS</Link>
                    <Link className={styles.link} href='/contact' onClick={() => setActive(false)}>KONTAKT</Link>
                </nav> 
            </div>
        </>
    )
}