/* eslint-disable @next/next/no-img-element */


import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import Arrow from './components/Arrow/Arrow';


export const metadata = {
  title: 'Kancelaria Zembowicz',
  description: 'Radca Prawny Renata Zembowicz',
}

export default function Home() {
  return (
    <>

      <div className={styles.container}>

        <Arrow />

        <div className={styles.hero}> 
          <img className={styles.image} src="/main_1.png" alt="Main cover" />
          <img className={styles.image_media_1024} src="/main_1media1200.png" alt="Main cover" />
          <img className={styles.image_media_768} src="/main_1media768.png" alt="Main cover" />
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
                Witamy w Kancelarii Radcy Prawnego Renaty Zembowicz –to miejsce, gdzie prawa stają się klarowne, a rozwiązania są skrojone na miarę Twoich potrzeb. Jako zaufany radca prawny, Renata Zembowicz i jej zespół specjalistów oferują kompleksowe usługi prawne, oparte na solidnej wiedzy i długoletnim doświadczeniu. W centrum naszej misji stoi świadczenie usług prawnych na najwyższym poziomie. Zrozumienie, profesjonalizm i skuteczność to wartości, które kierują naszą pracą. Jesteśmy tu po to, aby służyć wsparciem w najbardziej wymagających kwestiach prawnych.
              </p>
            </div>
            
          </div>
          <div className={styles.image}>
              <img className={styles.info_img} src="/page_1_2.png" alt="law lady"/>
            </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.partners}>
          <h2>NASI PARTNERZY</h2>
          <div className={styles.names}>
            <img src="/partners.png" alt="" />
            <img src="/partners.png" alt="" />
            <img src="/partners.png" alt="" />
            <img src="/partners.png" alt="" />
            <img src="/partners.png" alt="" />
            <img src="/partners.png" alt="" />
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.why}>
          <h2>Dlaczego kancelaria Zembowicz?</h2>
          <ul>
            <li>
              <img src="/Component_1.svg" alt="" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis autem aspernatur doloremque doloribus ducimus eligendi eaque libero 
              </p>
            </li>
            <li>
            <img src="/Component_2.svg" alt="" />
              <p>
              Indywidualne Podejście:
              </p>
              <p>
              Jesteśmy świadomi, że każda sprawa jest wyjątkowa. Dlatego dostosowujemy nasze podejście do indywidualnych potrzeb klienta.
              </p>
            </li>
            <li>
            <img src="/Component_3.svg" alt="" />
              <p>
              Doświadczenie i Profesjonalizm: 
              </p>
              <p>
              Renata Zembowicz to prawnik z bogatym doświadczeniem, a nasz zespół to eksperci w swoich dziedzinach.
              </p>
            </li>
            <li>
            <img src="/Component_4.svg" alt="" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis autem aspernatur doloremque doloribus ducimus eligendi eaque libero 
              </p>
            </li>
            {/* <li>
            <img src="/Component_5.svg" alt="" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis autem aspernatur doloremque doloribus ducimus eligendi eaque libero expedita iusto rem accusantium voluptatum corporis soluta, veritatis est numquam labore quos blanditiis?
              </p>
            </li>
            <li>
            <img src="/Component_6.svg" alt="" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis autem aspernatur doloremque doloribus ducimus eligendi eaque libero expedita iusto rem accusantium voluptatum corporis soluta, veritatis est numquam labore quos blanditiis?
              </p>
            </li> */}
          </ul>
        </div>

        <div className={styles.line}></div>

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
              <img className={styles.info_img} src="/page_1_3.png" alt="law lady"/>
            </div>
        </div>

      </div>
      
    </>
  )
}
