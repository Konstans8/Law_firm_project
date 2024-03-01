/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';

export const metadata = {
  title: 'Warszawa długa 29',
  description: 'Radca Prawny Renata Zembowicz',
}


export default function Services() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page5/main_5.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/page5/main_5media1200.png" alt="Logo" />
        <img className={styles.image_media_768} src="/page5/main_5media768.png" alt="Logo" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Lokalizacja <br /> Kancelarii <br /> Zembowicz</h1>
        </div>
      </div>

      <div className={styles.contacts}>
        <h2>Dane kontaktowe Kancelarii Zembowicz</h2>
        <div className={styles.contacts_text}>
          <p>
          Nasza kancelaria mieści się i w Warszawie, na ulicy Długiej. To centralne miejsce ułatwia dostępność dla naszych klientów z różnych dzielnic stolicy.
          </p>
          <p>
          Chociaż nasza siedziba znajduje się w Warszawie, to z przyjemnością informujemy, że świadczymy usługi prawne na terenie całej Polski. Bez względu na to, czy znajdujesz się w Krakowie, Gdańsku, czy Wrocławiu, możesz liczyć na profesjonalną obsługę prawna z naszej strony. Jesteśmy gotowi pomóc Ci w rozwiązaniu Twoich problemów prawnych, bez względu na lokalizację.
          </p>
        </div>
        <div className={styles.address}>
          <div className={styles.address_top}>
            <img src="/page5/contact_map.svg" alt="" />
            <h5>Adres:</h5>
            <p>Warszawa</p>  
            <p>Ul. Długa 29</p>  
            <p>Lokal: 215</p>
            <p>Kod pocztowy: 00-238</p>  
          </div>
          <div className={styles.address_center}>
          <img src="/page5/contact_call.svg" alt="" />
            <h5>Telefon:</h5> 
            <a href="tel:+48508064010">+48 508 064 010</a>
            <a href="tel:+48505966643">+48 505 966 643</a>
          </div>
          <div className={styles.address_bottom}>
          <img src="/page5/contact_mail.svg" alt="" />
            <h5>Adres poczty elektronicznej:</h5>
            <a href="mailto: kancelaria@zembowicz.pl">kancelaria@zembowicz.pl</a>
          </div>
        </div>

        <div className={styles.b_text}>
          <h5>
            Jesteśmy Kancelarią, która troszczy się o Twoje prawa.
          </h5>
        </div>

        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.422251523351!2d21.003856692563456!3d52.24620798504159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdd2c64ff87d%3A0x7efd2d1cee8c245e!2sKancelaria%20Radcy%20Prawnego%20Renata%20Zembowicz!5e0!3m2!1sen!2spl!4v1708701190043!5m2!1sen!2spl" width={"100%"} height={"600px"} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </>
  )
}