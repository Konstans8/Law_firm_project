/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';
import Arrow from '@/app/components/Arrow/Arrow';

export const metadata = {
  title: 'Sporządzanie i opiniowanie umów',
  description: 'Radca Prawny Renata Zembowicz',
}

export default function Services() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page2/preparing/services_5.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/page2/preparing/services_5media1024.png" alt="Main cover" />
        <img className={styles.image_media_768} src="/page2/preparing/services_5media768.png" alt="Main cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Sporządzanie i opiniowanie umów</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Sporządzanie i Opiniowanie Umów Prawnych</h2>
          </div>
          <div className={styles.description}>
            <p>
            Nasza kancelaria prawnicza oferuje profesjonalne usługi w zakresie sporządzania i opiniowania umów prawnych, zapewniając naszym Klientom kompleksową pomoc w przygotowywaniu i analizie wszelkiego rodzaju umów, które są kluczowe dla ich działalności biznesowej lub osobistych transakcji. Dzięki bogatemu doświadczeniu naszego zespołu prawników oraz dogłębnemu zrozumieniu różnych dziedzin prawa, jesteśmy w stanie zapewnić naszym Klientom wysokiej jakości dokumenty prawne, które spełniają ich potrzeby oraz chronią ich interesy.
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/page2/preparing/agreement.png" alt="preparing"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offerServices}>
        <h2>Nasze Usługi Sporządzania i Opiniowania Umów Obejmują M.in.:</h2>
        <ul>
          <li>
            <img src="/page2/preparing/p1.png" alt="" />
            <h4>Sporządzanie Umów Handlowych: </h4>
            <p>
            Pomagamy naszym Klientom w przygotowywaniu umów handlowych, takich jak umowy sprzedaży, umowy najmu, umowy dzierżawy, umowy współpracy biznesowej, umowy franchisingu oraz inne umowy, które są niezbędne dla prowadzenia działalności gospodarczej.
            </p>
          </li>
          <li>
            <img src="/page2/preparing/p2.png" alt="" />
            <h4>Umowy Pracy i Umowy Zarządzania: </h4>
            <p>
            Świadczymy usługi w zakresie sporządzania umów o pracę, umów o dzieło, umów o świadczenie usług, umów zlecenia oraz innych dokumentów związanych z relacjami pracowniczymi i zarządczymi w firmie.
            </p>
          </li>
          <li>
            <img src="/page2/preparing/p3.png" alt="" />
            <h4>Umowy Licencyjne i Umowy Franchisingowe:</h4>
            <p>
            Doradzamy naszym Klientom w kwestiach związanych z umowami licencyjnymi, umowami franczyzowymi oraz innymi umowami dotyczącymi praw własności intelektualnej i wykorzystywania technologii.
            </p>
          </li>
          <li>
            <img src="/page2/preparing/p4.png" alt="" />
            <h4>Umowy Inwestycyjne i Finansowe: </h4>
            <p>
            Pomagamy w sporządzaniu umów inwestycyjnych, umów pożyczki, umów leasingu, umów faktoringowych oraz innych dokumentów związanych z finansowaniem i inwestycjami.
            </p>
          </li>
          <li>
            <img src="/page2/preparing/p5.png" alt="" />
            <h4>Opiniowanie Umów:</h4>
            <p>
            Nasz zespół prawników specjalizuje się w analizie i opiniowaniu istniejących umów, identyfikując ryzyka prawne, sugestywne klauzule oraz proponując niezbędne poprawki mające na celu zabezpieczenie interesów Klienta i minimalizację potencjalnych konfliktów.
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