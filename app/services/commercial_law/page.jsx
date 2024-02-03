/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';


export default function Services() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.image} src="/services_6.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/services_6media1024.png" alt="Main cover" />
        <img className={styles.image_media_768} src="/services_6media768.png" alt="Main cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Prawo handlowe i korporacje</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>CZYM SIE ZAJMUJEMY</h2>
          </div>
          <div className={styles.description}>
            <p>
              Witamy w Kancelarii Radcy Prawnego Renaty Zembowicz –to miejsce, gdzie prawa stają się klarowne, a rozwiązania są skrojone na miarę Twoich potrzeb. Jako zaufany radca prawny, Renata Zembowicz i jej zespół specjalistów oferują kompleksowe usługi prawne, oparte na solidnej wiedzy i długoletnim doświadczeniu. W centrum naszej misji stoi świadczenie usług prawnych na najwyższym poziomie. Zrozumienie, profesjonalizm i skuteczność to wartości, które kierują naszą pracą. Jesteśmy tu po to, aby służyć wsparciem w najbardziej wymagających kwestiach prawnych.
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/info_page2.png" alt="law lady"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.partners}>
        <h2>USŁUGI KTÓRE ŚWIADCZYMY</h2>
        <div className={styles.names}>
          <Link className={styles.service} href='/services/civil_law'>
            <img src="/page2_1.png" alt="civil_law" />
            <img className={styles.image_1024} src="/page2_1media.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Cywilne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/family_law'>
            <img src="/page2_2.png" alt="family_law" />
            <img className={styles.image_1024} src="/page2_2media.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Rodzinne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/specialization'>
            <img src="/page2_3.png" alt="veterinary_law" />
            <img className={styles.image_1024} src="/page2_3media.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Weterynaryjne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/support_in_negotiations'>
            <img src="/page2_4.png" alt="support_in_negotiations" />
            <img className={styles.image_1024} src="/page2_4media.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Wsparcie w Negocjacjach</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/preparing_and_giving_opinions'>
            <img src="/page2_5.png" alt="preparing_and_giving_opinions" />
            <img className={styles.image_1024} src="/page2_5media.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Sporządzanie i Opiniowanie Umów</span>
            </div>
          </Link>
          <Link className={styles.service} href='/services/commercial_law'>
            <img src="/page2_6.png" alt="commercial_law" />
            <img className={styles.image_1024} src="/page2_6media.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Handlowe i Korporacje</span>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}