/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';
import Slider from '../components/Swiper/Swiper';

export const metadata = {
  title: 'Dom rekolekcyjny w Sulejówku',
  description: 'Marianie w Sulejówku',
}

export default function Gallery() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page4/main_4.png" alt="" />
        <img className={styles.image_media_1024} src="/page4/main_4media1200.png" alt="" />
        <img className={styles.image_media_768} src="/page4/main_4media768.png" alt="" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>TAK WYGLĄDA DOM REKOLEKCYJNY</h1>
        </div>
      </div> 

      <div className={styles.info}>
        
        <div className={styles.info_container}>

          <div className={styles.title}>
            <h2>GALERIA</h2>
          </div>
          
          <Slider />
          
        </div>
        
      </div>

      <div className={styles.line}></div>
      
      <div className={styles.gallery_text}>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe velit laudantium tempore vero deleniti ad fugiat sed perferendis ipsam, omnis harum excepturi ipsum aut dolores non rerum repellendus assumenda.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus, ab, expedita debitis maxime provident optio modi, aliquid nihil quam ipsam corrupti perspiciatis quasi! Inventore voluptas enim distinctio ex quasi.
        </p>
      </div>
    </>
  )
}