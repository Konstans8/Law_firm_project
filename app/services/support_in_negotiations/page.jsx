/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';
import Arrow from '@/app/components/Arrow/Arrow';

export const metadata = {
  title: 'Wsparcie w negocjacjach',
  description: 'Kancelaria Zembowicz, Radca Prawny Renata Zembowicz, pomoc prawna, adwokat',
}

export default function ServiceSupport() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page2/support/services_4.png" alt="Support cover" />
        <img className={styles.image_media_1024} src="/page2/support/services_4media1024.png" alt="Support cover" />
        <img className={styles.image_media_768} src="/page2/support/services_4media768.png" alt="Support cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Wsparcie w negocjacjach</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Wsparcie w Negocjacjach Prawnych</h2>
          </div>
          <div className={styles.description}>
            <p>
            Nasza kancelaria prawnicza oferuje wysokiej jakości wsparcie w negocjacjach we wszystkich dziedzinach prawa, zapewniając naszym Klientom skuteczną pomoc w osiągnięciu satysfakcjonujących porozumień oraz rozwiązaniu konfliktów w sposób korzystny dla wszystkich zainteresowanych stron. Dzięki doświadczeniu naszego zespołu adwokatów i mediatorów, jesteśmy w stanie prowadzić negocjacje na najwyższym poziomie, dbając o ochronę interesów naszych Klientów oraz osiągnięcie optymalnych rezultatów.
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/page2/support/negotiate.png" alt="support"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offerServices}>
        <h2>Nasze Usługi Wsparcia w Negocjacjach Obejmują M.in.:</h2>
        <ul>
          <li>
            <img src="/page2/support/s1.png" alt="" />
            <h4>Negocjacje Biznesowe:</h4>
            <p>
            Pomagamy naszym Klientom w prowadzeniu negocjacji w sprawach biznesowych, takich jak zawieranie umów handlowych, umów partnerskich, umów licencyjnych oraz innych umów korporacyjnych. Nasz zespół prawników wspiera Klientów w osiągnięciu korzystnych warunków umownych oraz minimalizacji ryzyka prawnych.
            </p>
          </li>
          <li>
            <img src="/page2/support/s2.png" alt="" />
            <h4>Negocjacje w Sprawach Nieruchomości: </h4>
            <p>
            Świadczymy wsparcie w negocjacjach dotyczących transakcji nieruchomościowych, w tym zakupu, sprzedaży, najmu czy dzierżawy nieruchomości. Nasz zespół prawników doradza Klientom w kwestiach związanych z prawem nieruchomości oraz pomaga osiągnąć porozumienie z drugą stroną transakcji.
            </p>
          </li>
          <li>
            <img src="/page2/support/s3.png" alt="" />
            <h4>Negocjacje w Sprawach Korporacyjnych: </h4>
            <p>
            Oferujemy pomoc w negocjacjach dotyczących spraw korporacyjnych, takich jak restrukturyzacje, fuzje i przejęcia, rozwiązanie spółek oraz inne kwestie związane z życiem korporacyjnym. Nasz zespół prawników specjalizuje się w reprezentowaniu interesów firm oraz przedsiębiorstw na różnych płaszczyznach.
            </p>
          </li>
          <li>
            <img src="/page2/support/s4.png" alt="" />
            <h4>Mediacje i Rozwiązywanie Konfliktów:</h4>
            <p>
            Wspieramy naszych Klientów w mediacjach oraz alternatywnych metodach rozwiązywania sporów, pomagając znaleźć konstruktywne i satysfakcjonujące rozwiązania bez konieczności angażowania się w długotrwałe i kosztowne procesy sądowe.
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