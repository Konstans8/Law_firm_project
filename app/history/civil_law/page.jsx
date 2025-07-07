/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';
import Arrow from '@/app/components/Arrow/Arrow';

export const metadata = {
  title: 'Prawo cywilne',
  description: 'Kancelaria Zembowicz, Radca Prawny Renata Zembowicz, pomoc prawna, adwokat',
}

export default function ServiceCivil() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page2/civil/services_1.png" alt="Lawyer cover" />
        <img className={styles.image_media_1024} src="/page2/civil/services_1media1024.png" alt="Lawyer cover" />
        <img className={styles.image_media_768} src="/page2/civil/services_1media768.png" alt="Lawyer cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Prawo cywilne</h1>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Usługi z Zakresu <br /> Prawa Cywilnego</h2>
          </div>
          <div className={styles.description}>
            <p>
            Nasza kancelaria prawnicza oferuje kompleksowe usługi z zakresu prawa cywilnego, zapewniając naszym Klientom profesjonalną pomoc w różnorodnych sprawach związanych z relacjami prawno-cywilnymi. Niezależnie od charakteru i skomplikowania sprawy, nasz doświadczony zespół adwokatów i radców prawnych podejmuje się zapewnienia skutecznej reprezentacji oraz wsparcia na każdym etapie procesu.
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/page2/civil/civil.png" alt="civil"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offerServices}>
        <h2>Nasze Usługi Obejmują M.in.:</h2>
        <ul>
          <li>
            <img src="/page2/civil/c1.png" alt="" />
            <h4>
            Doradztwo Prawne:
            </h4>
            <p>
            Zapewniamy indywidualne doradztwo prawne w zakresie różnorodnych kwestii cywilnoprawnych, w tym dotyczących umów, zobowiązań, własności, spadków, praw autorskich oraz innych zagadnień związanych z prawem cywilnym.
            </p>
          </li>
          <li>
          <img src="/page2/civil/c2.png" alt="" />
            <h4>
            Reprezentacja w Sporach Cywilnych: 
            </h4>
            <p>
            Nasz zespół adwokatów świadczy profesjonalną reprezentację Klientów w procesach sądowych dotyczących spraw cywilnych, w tym w sprawach o odszkodowania, roszczenia majątkowe, podziały majątku, sporów o umowy oraz inne sprawy związane z prawem cywilnym.
            </p>
          </li>
          <li>
          <img src="/page2/civil/c3.png" alt="" />
            <h4>
            Obsługa Spadków: 
            </h4>
            <p>
            Pomagamy naszym Klientom w kwestiach związanych ze sporządzeniem testamentu, dziedziczeniem, podziałem majątku oraz wszelkimi innymi kwestiami związanymi ze sprawami spadkowymi, zapewniając kompleksową i rzetelną obsługę.
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