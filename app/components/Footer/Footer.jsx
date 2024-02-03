import styles from './Footer.module.scss';
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <Image className={styles.logo}
                    src="/Logo.png"
                    width={260}
                    height={50}
                    alt="Kancelaria Zembowicz"
                />
                <p>Otrzymaj darmową konsultację<br />W godzinach:<br />10:00 - 18:00</p>
                <a href="tel:+48777777777">Zadzwoń</a>
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    <Link className={styles.link} href='/'>KANCELARIA</Link>
                    <Link className={styles.link} href='/services'>USŁUGI</Link>
                    <Link className={styles.link} href='/specialization'>SPECJALIZACJA</Link>
                    <Link className={styles.link} href='/about'>NAS</Link>
                    <Link className={styles.link} href='/contact'>KONTAKT</Link>
                </div>
                <div className={styles.local}>
                    <p className={styles.mr}>Stałe miejsce wykonywania <br /> działalności gospodarczej:</p>
                    <p>
                        Województwo: MAZOWIECKIE
                    </p>
                    <p>
                        Powiat: Warszawa
                    </p>    
                    <p>
                        Miejscowość: Warszawa
                    </p>   
                    <p>
                        Ulica: Długa
                    </p>   
                    <p>
                        Numer: 29
                    </p>    
                    <p>
                        Lokal: 215
                    </p>   
                    <p>
                        Kod pocztowy: 00-238
                    </p>    
                </div>
                <div className={styles.sentence}>
                    <p>
                    Zapraszamy do skorzystania z naszych usług i odkrycia, jak Kancelaria  Zembowicz możemy być Twoim niezawodnym partnerem w sprawach prawnych. Skontaktuj się z nami, a my z przyjemnością pomożemy rozwiązać Twoje problemy prawne.
                    </p>
                </div>
            </div>
        </footer>
    )
}