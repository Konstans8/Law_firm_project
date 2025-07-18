/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';
import Arrow from '@/app/components/Arrow/Arrow';


export default function Services() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/services_ex.png" alt="Logo" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Nasze doświadczenie</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est.</p>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_left}>
          <h2>JAK POMOC</h2>
          <div className={styles.second_page}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Et accusamus ut corporis! Itaque unde ea rem nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Et accusamus ut corporis! Itaque unde ea rem nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat!</p>
          </div>
        </div>
        <div className={styles.info_right}>
          <img src="/info_page2.png" alt="law foto" />
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.partners}>
        <h2>USŁUGI KTÓRE ŚWIADCZYMY</h2>
        <div className={styles.names}>
          <Link className={styles.service} href='/history/oszustwo'>
            <img src="/page2_1.png" alt="" />
            <div className={styles.overlay}>
              <span>Oszustwo</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/pomoc'>
            <img src="/page2_2.png" alt="" />
            <div className={styles.overlay}>
              <span>Pomoc</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/adwokat'>
            <img src="/page2_3.png" alt="" />
            <div className={styles.overlay}>
              <span>Adwokat</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/obrona'>
            <img src="/page2_4.png" alt="" />
            <div className={styles.overlay}>
              <span>Obrona</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/prawo'>
            <img src="/page2_5.png" alt="" />
            <div className={styles.overlay}>
              <span>Prawo</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/dokumenty'>
            <img src="/page2_6.png" alt="" />
            <div className={styles.overlay}>
              <span>Dokumenty</span>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}