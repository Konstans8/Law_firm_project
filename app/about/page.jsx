/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';



export default function Services() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.image} src="/main_4.png" alt="Logo" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>KANCELARIA ZEMBOWICZ TYLKO WYSOKOKWALIFIKOWANI I DOŚWIADCZENI PRAWNICY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est.</p>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_left}>
          <h2>Adwocati i prawnicy w kancelaria ZEMBOWICZ</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Et accusamus ut corporis! Itaque unde ea rem nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Et accusamus ut corporis! Itaque unde ea rem nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Et accusamus ut corporis! Itaque unde ea rem nobis!</p>
        </div>
        <div className={styles.info_right}>
          <img src="/info_page3.png" alt="law man" />
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