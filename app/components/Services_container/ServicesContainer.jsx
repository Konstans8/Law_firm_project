"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './Services.module.scss'

export default function ServicesContainer() {
    return(
        <>
            <div className={styles.partners}>
                <h2>HISTORIA</h2>
                <div className={styles.names}>
                <Link className={styles.service} href='/history/civil_law'>
                    <img src="/page2_1.png" alt="civil_law" />
                    <img className={styles.image_1024} src="/page2_1media.png" alt="civil_law" />
                    <img className={styles.image_320} src="/page2_1media320.png" alt="civil_law" />
                    <div className={styles.overlay}>
                    <span className={styles.card_title}>Św. Stanisław Papczyński</span>
                    </div>
                </Link>
                <Link className={styles.service} href='/history/family_law'>
                    <img src="/page2_2.png" alt="family_law" />
                    <img className={styles.image_1024} src="/page2_2media.png" alt="civil_law" />
                    <img className={styles.image_320} src="/page2_2media320.png" alt="civil_law" />
                    <div className={styles.overlay}>
                    <span className={styles.card_title}>Sługa Boży Kazimierz Wyszyński</span>
                    </div>
                </Link>
                <Link className={styles.service} href='/offer'>
                    <img src="/page2_3.png" alt="veterinary_law" />
                    <img className={styles.image_1024} src="/page2_3media.png" alt="civil_law" />
                    <img className={styles.image_320} src="/page2_3media320.png" alt="civil_law" />
                    <div className={styles.overlay}>
                    <span className={styles.card_title}>Bł. Jerzy Matulewicz</span>
                    </div>
                </Link>
                <Link className={styles.service} href='/history/support_in_negotiations'>
                    <img src="/page2_4.png" alt="support_in_negotiations" />
                    <img className={styles.image_1024} src="/page2_4media.png" alt="civil_law" />
                    <img className={styles.image_320} src="/page2_4media320.png" alt="civil_law" />
                    <div className={styles.overlay}>
                    <span className={styles.card_title}>Bł. Męczennicy z Rosicy</span>
                    </div>
                </Link>
                <Link className={styles.service} href='/history/preparing_and_giving_opinions'>
                    <img src="/page2_5.png" alt="preparing_and_giving_opinions" />
                    <img className={styles.image_1024} src="/page2_5media.png" alt="civil_law" />
                    <img className={styles.image_320} src="/page2_5media320.png" alt="civil_law" />
                    <div className={styles.overlay}>
                    <span className={styles.card_title}>Marianie w historii</span>
                    </div>
                </Link>
                <Link className={styles.service} href='/history/commercial_law'>
                    <img src="/page2_6.png" alt="commercial_law" />
                    <img className={styles.image_1024} src="/page2_6media.png" alt="civil_law" />
                    <img className={styles.image_320} src="/page2_6media320.png" alt="civil_law" />
                    <div className={styles.overlay}>
                    <span className={styles.card_title}>Marianie dziś</span>
                    </div>
                </Link>
                </div>
            </div>
        </>
    )
}