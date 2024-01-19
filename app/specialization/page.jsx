/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';



export default function Specialization() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.image} src="/main_3.png" alt="Logo" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Obrona <br /> weterynarzy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab exercitationem debitis culpa natus, ratione ipsum sed iure odio nemo impedit, omnis quae voluptates in facilis dolore minus consectetur est.</p>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_left}>
          <h2>CZYM SIE ZAJMUJEMY</h2>
          <div className={styles.second_page}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Et accusamus ut corporis! Itaque unde ea rem nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Et accusamus ut corporis! Itaque unde ea rem nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero tempora minus odit, ab voluptatem maxime nulla eum, doloremque assumenda quaerat!</p>
          </div>
        </div>
        <div className={styles.info_right}>
          <img src="/info_page4.png" alt="law foto" />
        </div>
      </div>
    </>
  )
}