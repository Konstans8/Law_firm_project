import { format } from 'date-fns';
import styles from './Footer.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import CookieBanner from '../Cookie/Cookie';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
               <div className={styles.left}>
                <Image className={styles.logo}
                    src="/new_logo.png"
                    width={50}
                    height={50}
                    alt="Zgromadzenie Księży Marianów"
                />
                <p>Skontaktuj Się z Nami</p>
                <a href="tel:+48000000000">Zadzwoń</a>
                <a href="mailto: helloworld@js.com">Napisz</a>
                </div>
                <div className={styles.right}>
                <div className={styles.links}>
                    <Link className={styles.link} href='/'>GŁÓWNA</Link>
                    <Link className={styles.link} href='/history'>HISTORIA</Link>
                    <Link className={styles.link} href='/offer'>OFERTA</Link>
                    <Link className={styles.link} href='/gallery'>GALERIA</Link>
                    <Link className={styles.link} href='/contact'>KONTAKT</Link>
                </div>
                <div className={styles.local}>
                    <p className={styles.mr}>Dom Rekolekcyjny w Sulejówku <br /> Nasz adress</p>
                    <p>
                        Województwo: MAZOWIECKIE
                    </p>
                    <p>
                        Powiat: Warszawa
                    </p>    
                    <p>
                        Miejscowość: Sulejówek
                    </p>   
                    <p>
                        Ulica: Mariańska
                    </p>   
                    <p>
                        Numer: 9
                    </p>       
                    <p>
                        Kod pocztowy: 05-070
                    </p>    
                </div>
                <div className={styles.sentence}>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi rerum corporis consequatur placeat quae, porro numquam, inventore beatae deleniti, dolores quos incidunt quod amet labore molestias? In, dolorem accusamus.
                    </p>
                </div>
                </div> 
            </div>
            <div className={styles.date_container}>
                <p>© {format(new Date(), 'yyyy-MM-dd')} rekolekcje-sulejowek.marianie.pl Wszelkie prawa zastrzeżone.</p>
            </div>
            
            <CookieBanner />
        </footer>
    )
}