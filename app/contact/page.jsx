/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';



export default function Services() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.image} src="/main_5.png" alt="Logo" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>NASZA SIEDZIBA <br /> W WARSZAWIE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est.</p>
        </div>
      </div>

      <div className={styles.contacts}>
        <h2>Dane kontaktowe Kancelarii Zembowicz</h2>
        <div className={styles.address}>
          <div className={styles.address_left}>
            <img src="/contact_map.svg" alt="" />
            <p>Stałe miejsce wykonywania działalności gospodarczej:</p>
            <p>Województwo: MAZOWIECKIE </p>  
            <p>Powiat: Warszawa</p>  
            <p>Miejscowość: Warszawa</p>  
            <p>Ulica: Długa</p>  
            <p>Numer: 29</p>  
            <p>Lokal: 215</p>
            <p>Kod pocztowy: 00-238</p>  
          </div>
          <div className={styles.address_center}>
          <img src="/contact_call.svg" alt="" />
            <p>Telefon:</p> 
            <a href="tel:+48123456789 ">+48123456789</a>
            <a href="tel:+48987654321  ">+48987654321 </a>
          </div>
          <div className={styles.address_right}>
          <img src="/contact_mail.svg" alt="" />
            <p>Adres poczty elektronicznej:</p>
            <a href="mailto: helloworld@js.com">helloworld@js.com</a>
          </div>
        </div>

        <img src="/map.png" alt="" />

      </div>
    </>
  )
}