/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';


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

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Radca prawny ds. Błędów Lekarskich Weterynaryjnych</h2>
          </div>
          <div className={styles.description}>
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
        <div className={styles.image}>
            <img className={styles.info_img} src="/info_page4.png" alt="law lady"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.partners}>
        <h2>INNE USŁUGI</h2>
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