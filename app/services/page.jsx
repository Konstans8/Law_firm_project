/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Button from '../components/Button/Button';
import Arrow from '../components/Arrow/Arrow';
import ServicesContainer from '../components/Services_container/ServicesContainer';


export const metadata = {
  title: 'Kancelaria Zembowicz',
  description: 'Radca Prawny Renata Zembowicz',
}

export default function Services() {

  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page2/main_2.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/page2/main_2media1200.png" alt="Main cover" />
        <img className={styles.image_media_768} src="/page2/main_2media768.png" alt="Main cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Szerokie Spektrum Usług w zakresie prawa</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Nasza <br /> Oferta <br /> Prawna</h2>
          </div>
          <div className={styles.description}>
            <p>
            W Kancelarii Renaty Zembowicz oferujemy szeroki zakres usług prawnych, obejmujących porady prawne, reprezentację sądową, sporządzanie umów oraz inne. Bez względu na charakter Twojej sprawy, możesz być pewien, że podejmiemy się jej z pełnym zaangażowaniem i profesjonalizmem.
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/page2/info_page2.png" alt="justice offer"/>
          </div>
      </div>

      <div className={styles.line}></div>

      {/* <div className={styles.partners}>
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
      </div> */}

      <ServicesContainer />
    </>
  )
}