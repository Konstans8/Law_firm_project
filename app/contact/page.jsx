/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';


export default function Services() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/main_5.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/main_5media1200.png" alt="Logo" />
        <img className={styles.image_media_768} src="/main_5media768.png" alt="Logo" />
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
            <img src="/contact_map.svg" alt="" />
            <h5>Adres:</h5>
            <p>Warszawa</p>  
            <p>Ul. Długa 29</p>  
            <p>Lokal: 215</p>
            <p>Kod pocztowy: 00-238</p>  
          </div>
          <div className={styles.address_center}>
          <img src="/contact_call.svg" alt="" />
            <h5>Telefon:</h5> 
            <a href="tel:+48123456789 ">+48123456789</a>
            <a href="tel:+48987654321  ">+48987654321 </a>
          </div>
          <div className={styles.address_bottom}>
          <img src="/contact_mail.svg" alt="" />
            <h5>Adres poczty elektronicznej:</h5>
            <a href="mailto: helloworld@js.com">kancelaria@zembowicz.pl</a>
          </div>
        </div>

        <div className={styles.b_text}>
          <h5>
            Jesteśmy Kancelarią, która troszczy się o Twoje prawa.
          </h5>
        </div>

        <img src="/map.png" alt="" />

      </div>
    </>
  )
}