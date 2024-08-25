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
        <img className={styles.image} src="/page2/main_2.png" alt="Services cover" />
        <img className={styles.image_media_1024} src="/page2/main_2media1200.png" alt="Services cover" />
        <img className={styles.image_media_768} src="/page2/main_2media768.png" alt="Services cover" />
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

      <ServicesContainer />
    </>
  )
}