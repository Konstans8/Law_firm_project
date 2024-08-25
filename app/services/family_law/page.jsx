/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';
import Arrow from '@/app/components/Arrow/Arrow';

export const metadata = {
  title: 'Prawo rodzinne',
  description: 'Kancelaria Zembowicz, Radca Prawny Renata Zembowicz, pomoc prawna, adwokat, rodzina',
}

export default function ServiceFamily() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page2/family/services_2.png" alt="Family cover" />
        <img className={styles.image_media_1024} src="/page2/family/services_2media1024.png" alt="Family cover" />
        <img className={styles.image_media_768} src="/page2/family/services_2media768.png" alt="Family cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Prawo rodzinne</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Usługi z Zakresu <br /> Prawa Rodzinnego</h2>
          </div>
          <div className={styles.description}>
            <p>
              Nasza kancelaria prawnicza specjalizuje się w obsłudze spraw z zakresu prawa rodzinnego, oferując naszym Klientom kompleksową i profesjonalną pomoc w różnorodnych kwestiach związanych z życiem rodzinnym oraz relacjami między członkami rodziny. Dążymy do zapewnienia naszym Klientom wsparcia prawnego, które uwzględnia ich indywidualne potrzeby oraz dba o dobro wszystkich zainteresowanych stron.
            </p>
          </div>
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/page2/family/family.png" alt="family"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offerServices}>
        <h2>Nasze Usługi Obejmują M.in.:</h2>
        <ul>
          <li>
            <img src="/page2/family/f1.png" alt="" />
            <h4>
            Rozwody i Separacje:
            </h4>
            <p>
            Zapewniamy wsparcie prawnika w procesach rozwodowych oraz separacyjnych, pomagając naszym Klientom w zrozumieniu ich praw i obowiązków, oraz reprezentując ich interesy przed sądem w sprawach dotyczących rozwodów, podziału majątku, alimentów oraz opieki nad dziećmi.
            </p>
          </li>
          <li>
          <img src="/page2/family/f2.png" alt="" />
            <h4>
            Sprawy Alimentacyjne:
            </h4>
            <p>
            Świadczymy profesjonalną pomoc prawna w sprawach alimentacyjnych, w tym ustalaniu wysokości alimentów, modyfikacji obowiązujących zobowiązań alimentacyjnych oraz egzekucji należnych świadczeń alimentacyjnych.
            </p>
          </li>
          <li>
          <img src="/page2/family/f3.png" alt="" />
            <h4>
            Sprawy o Opiekę nad Dziećmi: 
            </h4>
            <p>
            Reprezentujemy naszych Klientów w sprawach dotyczących ustalenia, zmiany lub wygaśnięcia praw do opieki nad dziećmi, w tym również w kwestiach związanych z władzą rodzicielską, miejscem zamieszkania dziecka oraz ustaleniem kontaktów z dzieckiem.
            </p>
          </li>
          <li>
          <img src="/page2/family/f4.png" alt="" />
            <h4>
            Adopcje: 
            </h4>
            <p>
            Pomagamy naszym Klientom w procesie adopcji, zapewniając wsparcie prawnika w przeprowadzeniu niezbędnych formalności oraz reprezentując ich interesy przed sądem w sprawach adopcyjnych.
            </p>
          </li>
          <li>
          <img src="/page2/family/f5.png" alt="" />
            <h4>
            Mediacje Rodzinne: 
            </h4>
            <p>
            Oferujemy usługi mediatora rodzinnych, pomagając naszym Klientom w rozwiązywaniu sporów rodzinnych pozasądowo, w sposób konstruktywny i korzystny dla wszystkich zainteresowanych stron.
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.line}></div>

      <div className={styles.partners}>
        <h2>USŁUGI KTÓRE ŚWIADCZYMY</h2>
        <div className={styles.names}>
          <Link className={styles.service} href='/services/civil_law'>
            <img src="/page2_1.png" alt="civil_law" />
            <img className={styles.image_1024} src="/page2_1media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_1media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Cywilne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/family_law'>
            <img src="/page2_2.png" alt="family_law" />
            <img className={styles.image_1024} src="/page2_2media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_2media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Rodzinne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/specialization'>
            <img src="/page2_3.png" alt="veterinary_law" />
            <img className={styles.image_1024} src="/page2_3media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_3media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Weterynaryjne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/support_in_negotiations'>
            <img src="/page2_4.png" alt="support_in_negotiations" />
            <img className={styles.image_1024} src="/page2_4media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_4media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Wsparcie w Negocjacjach</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/preparing_and_giving_opinions'>
            <img src="/page2_5.png" alt="preparing_and_giving_opinions" />
            <img className={styles.image_1024} src="/page2_5media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_5media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Sporządzanie i Opiniowanie Umów</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/commercial_law'>
            <img src="/page2_6.png" alt="commercial_law" />
            <img className={styles.image_1024} src="/page2_6media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_6media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Handlowe i Korporacje</span>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}