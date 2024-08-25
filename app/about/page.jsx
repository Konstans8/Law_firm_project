/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';

export const metadata = {
  title: 'Kancelaria Zembowicz - kadra',
  description: 'Renata Zembowicz, Bartłomiej Wawryszuk, Agnieszka Lengier, Paweł Kumór',
}

export default function About() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page4/main_4.png" alt="Kancelaria cover" />
        <img className={styles.image_media_1024} src="/page4/main_4media1200.png" alt="Kancelaria cover" />
        <img className={styles.image_media_768} src="/page4/main_4media768.png" alt="Kancelaria cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Kancelaria Zembowicz - Warszawa, ul. Dluga 29</h1>
        </div>
      </div> 

      <div className={styles.info}>
        
        <div className={styles.info_container}>

          <div className={styles.title}>
            <h2>Radcy Prawni i Specjaliści w Kancelarii Zembowicz</h2>
          </div>
          <div className={styles.description}>
            <p>
              W Kancelarii Radcy Prawnego Renaty Zembowicz stawiamy na wysoką jakość usług prawnych, dostarczając naszym klientom kompleksową pomoc przy sprawach prawnych. Nasza kadra składa się z doświadczonych radców prawnych i specjalistów, którzy pod nadzorem Renaty Zembowicz, skrupulatnie pracują nad zabezpieczeniem interesów naszych klientów.
            </p>
          </div>

        </div>

        <div className={styles.image}>
            <img className={styles.info_img} src="/page4/info_page4.png" alt="Warszawa cover"/>
        </div>
        
      </div>

      <div className={styles.line}></div>

      <dir className={styles.persons}>
        <h2>Nasza kadra</h2>
        <div className={styles.persons_container}>
          <div className={styles.person}>
            <img src="/page4/face4.png" alt="Renata Zembowicz" />
            <div className={styles.person_info}>
              <h3>Renata Zembowicz - Radca Prawny:</h3>
              <p>Renata Zembowicz to doświadczony radca prawny, mający na koncie liczne sukcesy w reprezentowaniu klientów w sprawach o różnym charakterze. Jej profesjonalizm i zaangażowanie wpływają na wysoką jakość usług świadczonych przez naszą kancelarię.</p>
            </div>
          </div>
          <div className={styles.person}>
            <img src="/page4/face3.png" alt="Bartłomiej Wawryszuk" />
            <div className={styles.person_info}>
              <h3>Bartłomiej Wawryszuk - Aplikant Radcowski, Były Policjant</h3>
              <p>Unikalne doświadczenie policyjne Bartłomieja Wawryszuka pozwala mu skutecznie reprezentować klientów w sprawach karnych, zwłaszcza policjantów.  Ponadto specjalizuje się w prawie weterynaryjnym i rodzinnym. Wspiera naszych klientów w negocjacji kontraktów i umów.</p>
            </div>
          </div>
          <div className={styles.person}>
            <img src="/page4/face2.png" alt="Agnieszka Lengier" />
            <div className={styles.person_info}>
              <h3>Agnieszka Lengier - Lekarz Weterynarii, Konsultant</h3>
              <p>Agnieszka Lengier to doświadczony lekarz weterynarii, specjalista prawa weterynaryjnego i aktywny lekarz zajmujący się diagnozowaniem ultrasonograficznym. Posiadane przez nią unikalne połączenie wiedzy weterynaryjnej i prawniczej sprawia, że jest doskonałym konsultantem w zakresie błędów oraz praktyki weterynaryjnej.</p>
            </div>
          </div>
          <div className={styles.person}>
            <img src="/page4/face1.png" alt="Paweł Kumór" />
            <div className={styles.person_info}>
              <h3>Paweł Kumór - Księgowy, Konsultant</h3>
              <p>Paweł Kumór to doświadczony księgowy, posiadający zdany egzaminy ministerialne potwierdzające jego kwalifikacje. Z powodzeniem pełnił rolę dyrektora finansowego, a jego specjalizacja obejmuje także obszar prawa handlowego. Jego solidne doświadczenie oraz głęboka wiedza pozwalają mu świadczyć usługi na najwyższym poziomie</p>
            </div>
          </div>
          
        </div>
      </dir>
    </>
  )
}