/* eslint-disable @next/next/no-img-element */


import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import Arrow from './components/Arrow/Arrow';


export const metadata = {
  title: 'Kancelaria Zembowicz',
  description: 'Renata Zembowicz',
}

export default function Home() {
  return (
    <>

      <div className={styles.container}>

        <Arrow />

        <div className={styles.hero}> 
          <img className={styles.image} src="/page1/main_1.png" alt="Justice" />
          <img className={styles.image_media_1024} src="/page1/main_1media1200.png" alt="Justice" />
          <img className={styles.image_media_768} src="/page1/main_1media768.png" alt="Justice" />
          <div className={styles.hero_text}>
            <h1>RADCA <br /> PRAWNY <br /> RENATA <br /> ZEMBOWICZ</h1>
          </div>
        </div> 

        <div className={styles.info}>
          <div className={styles.info_container}>
            <div className={styles.title}>
              <h2>CZYM SIE ZAJMUJEMY?</h2>
            </div>
            <div className={styles.description}>
              <p>
                Witamy w Kancelarii Radcy Prawnego Renaty Zembowicz – to miejsce, gdzie prawa stają się klarowne, a rozwiązania są skrojone na miarę Twoich potrzeb. Jako zaufany radca prawny, Renata Zembowicz i jej zespół specjalistów oferują kompleksowe usługi prawne, oparte na solidnej wiedzy i długoletnim doświadczeniu. W centrum naszej misji stoi świadczenie usług prawnych na najwyższym poziomie. Zrozumienie, profesjonalizm i skuteczność to wartości, które kierują naszą pracą. Jesteśmy tu po to, aby służyć wsparciem w najbardziej wymagających kwestiach prawnych.
              </p>
            </div>
            
          </div>
          <div className={styles.image}>
              <img className={styles.info_img} src="/page1/page_1_2.png" alt="Lady Law"/>
            </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.partners}>
          <h2>NASI PARTNERZY</h2>
          <div className={styles.names_main_page}>
            <img src="/page1/partners.png" alt="Omnis Wet Image" className={styles.our_partner}/>
            <img src="/page1/partners2.png" alt="Omnis Wet Image" className={styles.our_partner}/>
            <img src="/page1/partners3.png" alt="Omnis Wet Image" className={styles.our_partner}/>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.why}>
          <h2>Dlaczego kancelaria Zembowicz?</h2>
          <ul>
            <li>
              <img src="/page1/Component_6.svg" alt="icon" />
              <h3>
              Współpraca z Ekspertami:
              </h3>
              <p>
              Współpracujemy z doświadczonymi ekspertami weterynaryjnymi, co umożliwia nam skuteczne analizowanie sprawy i prezentowanie solidnych argumentów przed sądem.
              </p>
            </li>
            <li>
            <img src="/page1/Component_2.svg" alt="icon" />
              <h3>
              Indywidualne Podejście:
              </h3>
              <p>
              Jesteśmy świadomi, że każda sprawa jest wyjątkowa. Dlatego dostosowujemy nasze podejście do indywidualnych potrzeb klienta.
              </p>
            </li>
            <li>
            <img src="/page1/Component_3.svg" alt="icon" />
              <h3>
              Doświadczenie i Profesjonalizm: 
              </h3>
              <p>
              Renata Zembowicz to prawnik z bogatym doświadczeniem, a nasz zespół to eksperci w swoich dziedzinach.
              </p>
            </li>
            <li>
            <img src="/page1/Component_4.svg" alt="icon" />
              <h3>
              Transparentność:
              </h3>
              <p>
              Oferujemy jasne i transparentne warunki współpracy, abyś mógł być pewien każdego kroku postępowania.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.line}></div>

        <div className={styles.info}>
          <div className={styles.info_container}>
            <div className={styles.title}>
              <h2>Radca Prawny <br /> Renata Zembowicz</h2>
            </div>
            <div className={styles.description}>
              <p>
              Renata Zembowicz to doświadczony radca prawny, wyróżnia się pasją do prawa oraz indywidualnym podejściem do każdej sprawy. Jej zdolność do skutecznego rozwiązywania problemów prawnych sprawiła, że zdobyła zaufanie licznych klientów. Renata specjalizuje się w obszarach takich jak prawo cywilne, handlowe, rodzinne zapewniając kompleksową obsługę prawną.
              </p>
            </div>
            
          </div>
          <div className={styles.image}>
              <img className={styles.info_img} src="/page1/info_page2.png" alt="Renata Zembowicz"/>
            </div>
        </div>

      </div>
      
    </>
  )
}
