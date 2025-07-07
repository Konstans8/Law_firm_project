/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';
import Arrow from '@/app/components/Arrow/Arrow';

export const metadata = {
  title: 'Prawo handlowe i korporacje',
  description: 'Kancelaria Zembowicz, Radca Prawny Renata Zembowicz, pomoc prawna, adwokat',
}

export default function ServiceCommercial() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page2/commerce/services_6.png" alt="Commerce cover" />
        <img className={styles.image_media_1024} src="/page2/commerce/services_6media1024.png" alt="Commerce cover" />
        <img className={styles.image_media_768} src="/page2/commerce/services_6media768.png" alt="Commerce cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Prawo handlowe i korporacje</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Usługi Prawne <br /> z Zakresu Prawa Handlowego <br /> i Korporacyjnego</h2>
          </div>
          <div className={styles.description}>
            <p>
            Nasza kancelaria prawnicza specjalizuje się w świadczeniu wysokiej jakości usług prawnych z zakresu prawa handlowego i korporacyjnego, zapewniając naszym Klientom kompleksową pomoc w różnorodnych kwestiach związanych z prowadzeniem działalności gospodarczej oraz funkcjonowaniem przedsiębiorstw. Dzięki doświadczeniu naszego zespołu adwokatów i doradców prawnych, jesteśmy w stanie zapewnić naszym Klientom skuteczną reprezentację oraz profesjonalne doradztwo, które spełnia najwyższe standardy.
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/page2/commerce/commercial.png" alt="commercial"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offerServices}>
        <h2>Nasze Usługi z Zakresu Prawa Handlowego i Korporacyjnego Obejmują M.in.:</h2>
        <ul>
          <li>
            <img src="/page2/commerce/b1.png" alt="" />
            <h4>Założenie i Rejestracja Spółek:</h4>
            <p>
            Pomagamy naszym Klientom w procesie zakładania i rejestracji spółek, doradzając w wyborze odpowiedniej formy prawnej oraz przygotowując niezbędne dokumenty rejestracyjne.
            </p>
          </li>
          <li>
            <img src="/page2/commerce/b2.png" alt="" />
            <h4>Obsługa Transakcji Korporacyjnych:</h4>
            <p>
            Świadczymy usługi w zakresie obsługi transakcji korporacyjnych, takich jak fuzje, przejęcia, podziały oraz likwidacje spółek, zapewniając kompleksowe wsparcie prawne na każdym etapie procesu.
            </p>
          </li>
          <li>
            <img src="/page2/commerce/b3.png" alt="" />
            <h4>Doradztwo w Zarządzaniu Spółką:</h4>
            <p>
            Oferujemy wsparcie prawne w zakresie zarządzania spółkami, doradzając w kwestiach dotyczących struktury organów spółki, podejmowania decyzji korporacyjnych oraz prowadzenia sprawozdawczości.
            </p>
          </li>
          <li>
            <img src="/page2/commerce/b4.png" alt="" />
            <h4>Sporządzanie Umów Handlowych:</h4>
            <p>
            Pomagamy w sporządzaniu różnego rodzaju umów handlowych, takich jak umowy dystrybucyjne, umowy agencyjne, umowy franchisingowe oraz inne dokumenty dotyczące relacji biznesowych.
            </p>
          </li>
          <li>
            <img src="/page2/commerce/b5.png" alt="" />
            <h4>Doradztwo w Prawie Konkurencji:</h4>
            <p>
            Zapewniamy wsparcie prawne w kwestiach związanych z prawem konkurencji, pomagając w analizie ryzyka antymonopolowego oraz przygotowywaniu wniosków o zgody na koncentracje.
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.line}></div>

      <div className={styles.partners}>
        <h2>USŁUGI KTÓRE ŚWIADCZYMY</h2>
        <div className={styles.names}>
          <Link className={styles.service} href='/history/civil_law'>
            <img src="/page2_1.png" alt="civil_law" />
            <img className={styles.image_1024} src="/page2_1media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_1media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Cywilne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/family_law'>
            <img src="/page2_2.png" alt="family_law" />
            <img className={styles.image_1024} src="/page2_2media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_2media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Rodzinne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/offer'>
            <img src="/page2_3.png" alt="veterinary_law" />
            <img className={styles.image_1024} src="/page2_3media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_3media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Weterynaryjne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/support_in_negotiations'>
            <img src="/page2_4.png" alt="support_in_negotiations" />
            <img className={styles.image_1024} src="/page2_4media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_4media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Wsparcie w Negocjacjach</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/preparing_and_giving_opinions'>
            <img src="/page2_5.png" alt="preparing_and_giving_opinions" />
            <img className={styles.image_1024} src="/page2_5media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_5media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Sporządzanie i Opiniowanie Umów</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/commercial_law'>
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