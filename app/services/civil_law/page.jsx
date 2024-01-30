/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';


export default function Civil() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.image} src="/services_1.png" alt="Logo" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Prawo cywilne</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est.</p>
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
          <Link className={styles.service} href='/services/civil_law'>
            <img src="/page2_1.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span>Prawo Cywilne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/family_law'>
            <img src="/page2_2.png" alt="family_law" />
            <div className={styles.overlay}>
              <span>Prawo Rodzinne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/specialization'>
            <img src="/page2_3.png" alt="veterinary_law" />
            <div className={styles.overlay}>
              <span>Prawo Weterynaryjne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/support_in_negotiations'>
            <img src="/page2_4.png" alt="support_in_negotiations" />
            <div className={styles.overlay}>
              <span>Wsparcie w Negocjacjach</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/preparing_and_giving_opinions'>
            <img src="/page2_5.png" alt="preparing_and_giving_opinions" />
            <div className={styles.overlay}>
              <span>Sporządzanie i Opiniowanie Umów</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/commercial_law'>
            <img src="/page2_6.png" alt="commercial_law" />
            <div className={styles.overlay}>
              <span>Prawo Handlowe i Korporacje</span>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}