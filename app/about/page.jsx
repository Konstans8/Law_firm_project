/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';


export default function Services() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/main_4.png" alt="Logo" />
        <img className={styles.image_media_1024} src="/main_4media1200.png" alt="Main cover" />
        <img className={styles.image_media_768} src="/main_4media768.png" alt="Main cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>KWALIFIKOWANI <br /> I DOŚWIADCZENI <br /> PRAWNICY</h1>
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
            <img className={styles.info_img} src="/info_page3.png" alt="law lady"/>
          </div>
      </div>

      <div className={styles.line}></div>

      <dir className={styles.persons}>
        <h2>Nasza kadra</h2>
        <div className={styles.faces}>
          <div className={styles.face}>
            <img src="/face1.png" alt="man" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quos officia laborum doloremque tempora accusantium ratione molestias dolores, ad eveniet quidem non quibusdam accusamus, enim labore. Impedit sed sunt ratione.</p>
          </div>
          <div className={styles.face}>
            <img src="/face2.png" alt="man" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quos officia laborum doloremque tempora accusantium ratione molestias dolores, ad eveniet quidem non quibusdam accusamus, enim labore. Impedit sed sunt ratione.</p>
          </div>
          <div className={styles.face}>
            <img src="/face3.png" alt="man" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quos officia laborum doloremque tempora accusantium ratione molestias dolores, ad eveniet quidem non quibusdam accusamus, enim labore. Impedit sed sunt ratione.</p>
          </div>
          <div className={styles.face}>
            <img src="/face4.png" alt="man" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quos officia laborum doloremque tempora accusantium ratione molestias dolores, ad eveniet quidem non quibusdam accusamus, enim labore. Impedit sed sunt ratione.</p>
          </div>
        </div>
      </dir>
    </>
  )
}