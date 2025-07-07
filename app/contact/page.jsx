/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';

export const metadata = {
  title: 'Sulejówek marianska 9',
  description: 'Dom rekolekcyjny',
}


export default function Contacts() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page5/main_5.png" alt="Warszawa" />
        <img className={styles.image_media_1024} src="/page5/main_5media1200.png" alt="Warszawa" />
        <img className={styles.image_media_768} src="/page5/main_5media768.png" alt="Warszawa" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Lokalizacja <br /> Domu <br /> Rekolekcyjnego</h1>
        </div>
      </div>

      <div className={styles.contacts}>
        <h2>Nasze dane kontaktowe</h2>
        <div className={styles.contacts_text}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias obcaecati similique corporis exercitationem. Voluptate, numquam animi! Ullam repellendus aliquam ipsam soluta mollitia. Quaerat officia veritatis temporibus corrupti, illum facere at.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consequatur aliquid esse sit cum, labore amet et praesentium expedita illo error corporis accusamus molestiae, molestias illum similique qui vitae perferendis.
          </p>
        </div>
        <div className={styles.address}>
          <div className={styles.address_top}>
            <img src="/page5/contact_map.svg" alt="map" />
            <h5>Adres:</h5>
            <p>Sulejówek</p>  
            <p>ul. Mariańska 9</p>  
            <p>Kod pocztowy: 05-070</p>  
          </div>
          <div className={styles.address_center}>
          <img src="/page5/contact_call.svg" alt="phone" />
            <h5>Telefon:</h5> 
            <a href="tel:+48516272671">+48 516 272 671</a>
            {/* <a href="tel:+48">+48 222 222 222</a> */}
          </div>
          <div className={styles.address_bottom}>
          <img src="/page5/contact_mail.svg" alt="email" />
            <h5>Adres poczty elektronicznej:</h5>
            <a href="mailto: rekolekcje-sulejowek@marianie.pl">rekolekcje-sulejowek@marianie.pl</a>
          </div>
        </div>

        <div className={styles.b_text}>
          <h5>
            Zakaz wjazdu na ulicę Konwaliową! Wjazd od strony ulicy Malinowej! 
          </h5>
        </div>

        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.3248688328026!2d21.26522877886937!3d52.23569819095254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed6aa6f1d4947%3A0xeaa19c3bc89c2d7c!2sMaria%C5%84ski%20Dom%20Rekolekcyjny!5e0!3m2!1sru!2spl!4v1741686929771!5m2!1sru!2spl"width={"100%"} height={"600px"} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

      {/* <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.422251523351!2d21.003856692563456!3d52.24620798504159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdd2c64ff87d%3A0x7efd2d1cee8c245e!2sKancelaria%20Radcy%20Prawnego%20Renata%20Zembowicz!5e0!3m2!1sen!2spl!4v1708701190043!5m2!1sen!2spl"width={"100%"} height={"600px"} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

    </>
  )
}