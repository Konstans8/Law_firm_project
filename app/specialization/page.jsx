/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';



export default function Specialization() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.image} src="/main_3.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/main_3media1200.png" alt="Main cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Reprezentacja <br /> Prawna <br /> Weterynarzy <br /> Radca prawny <br /> ds. Błędów <br /> Lekarskich <br /> Weterynaryjnych</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_left}>
          <h2>CZYM SIE ZAJMUJEMY</h2>
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
      </div>
    </>
  )
}