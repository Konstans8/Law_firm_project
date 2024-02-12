/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';

export const metadata = {
  title: 'Weterynarz',
  description: 'Błąd lekarski',
}

export default function Specialization() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/main_3.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/main_3media1200.png" alt="Main cover" />
        <img className={styles.image_media_768} src="/main_3media768.png" alt="Main cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Reprezentacja <br /> Prawna <br /> Weterynarzy</h1>
        </div>
      </div> 

      {/* <div className={styles.info}>
        <div className={styles.info_left}>
          <h2>Radca prawny ds. Błędów Lekarskich Weterynaryjnych</h2>
          <div className={styles.second_page}>
            <p>
            Witamy na stronie profesjonalnej kancelarii radcy prawnego specjalizującej się w reprezentowaniu korporacji weterynaryjnych oraz indywidualnych weterynarzy w sprawach związanych z błędami lekarskimi. Nasza doświadczona i zaangażowany zespół specjalistów jest gotowy świadczyć kompleksową pomoc prawna w tych delikatnych kwestiach.
            </p>
            <p>
            Nasza kancelaria oferuje szeroki zakres usług prawnych, w tym:
            </p>
              <ul>
                <li>Reprezentacja w sprawach związanych z błędami lekarskimi weterynaryjnymi.</li>
                <li>Doradztwo prawne dotyczące zgodności z obowiązującymi przepisami weterynaryjnymi.</li>
                <li>Przygotowywanie umów i dokumentacji zabezpieczającej interesy weterynarzy i korporacji weterynaryjnych.</li>
            </ul>
          </div>
        </div>
        <div className={styles.info_right}>
          <img src="/info_page4.png" alt="law foto" />
        </div>
      </div> */}

      <div className={styles.grid}>
        <div className={styles.block_top_left}>
          <div className={styles.title}>
            <h2>Radca prawny ds. Błędów Lekarskich Weterynaryjnych</h2>
          </div>
          <div className={styles.description}>
            <p>
              Witamy na stronie profesjonalnej kancelarii radcy prawnego specjalizującej się w reprezentowaniu korporacji weterynaryjnych oraz indywidualnych weterynarzy w sprawach związanych z błędami lekarskimi. Nasza doświadczona i zaangażowany zespół specjalistów jest gotowy świadczyć kompleksową pomoc prawna w tych delikatnych kwestiach.
            </p>
          </div>
        </div>
        <div className={styles.block_image}>
          <div className={styles.image}>
              <img className={styles.info_img} src="/info_page4.png" alt="law lady"/>
          </div>
        </div>
        <div className={styles.block_bottom}>
          <h3>Specjalizacja w Prawie Weterynaryjnym</h3>
          <p>
          Nasza kancelaria radcy prawnego posiada specjalistyczną wiedzę z zakresu prawa weterynaryjnego, co pozwala nam skutecznie reprezentować klientów w sprawach dotyczących błędów lekarskich weterynarzy.
          </p>

          <ul>
            <li>Doświadczenie w Sądzie zdobyliśmy  reprezentując weterynarzy i korporacje weterynaryjne przed sądem. Nasze sukcesy przekładają się na zaufanie klientów.</li>
            <li>Indywidualne Podejście: Każda sprawa jest dla nas unikalna. Staramy się zrozumieć specyfikę sytuacji lekarza Weterynarza, co pozwala nam dostosować strategię do konkretnych potrzeb.</li>
            <li>Współpraca z Ekspertami: Współpracujemy z doświadczonymi ekspertami weterynaryjnymi, co umożliwia nam skuteczne analizowanie sprawy i prezentowanie solidnych argumentów przed sądem.</li>
            
          </ul>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offer}>
          <h2>Nasza kancelaria oferuje szeroki zakres usług prawnych</h2>
          <ul>
            <li>
              <img src="/offer1.png" alt="" />
              <p>
              Reprezentacja w sprawach związanych z błędami lekarskimi weterynaryjnymi.
              </p>
            </li>
            <li>
            <img src="/offer2.png" alt="" />
              <p>
              Doradztwo prawne dotyczące zgodności z obowiązującymi przepisami weterynaryjnymi.
              </p>
            </li>
            <li>
            <img src="/offer3.png" alt="" />
              <p>
              Przygotowywanie umów i dokumentacji zabezpieczającej interesy weterynarzy i korporacji weterynaryjnych.
              </p>
            </li>
          </ul>
        </div>

      <div className={styles.line}></div>

      <div className={styles.dop}>
        <h4>
          Jeśli poszukujesz doświadczonego adwokata ds. błędów lekarskich weterynaryjnych, jesteśmy tutaj, aby Ci pomóc. Nasza kancelaria świadczy usługi na terenie całej Polski. Skontaktuj się z nami, aby umówić się na bezpłatną konsultację prawna. Jesteśmy, aby bronić Twoich praw.
        </h4>
        <a className={styles.phone} href="tel:+48505966643">
          <img src="/phone.svg" alt="" />
        </a>
      </div>
      
      <div className={styles.line}></div>

      <div className={styles.partners}>
        <h2>INNE USŁUGI</h2>
          <Link className={styles.btn} href='/services'><img src="/arrow_next.svg" alt="" />Przejdz</Link>
      </div>
      
    </>
  )
}