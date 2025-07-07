/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link'
import Image from 'next/image'
// import styles from '../page.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Стили Swiper 
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/test/1.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/test/2.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/test/3.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/test/4.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/test/5.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/test/6.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/test/7.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/test/8.webp" style={{ width: "100%", borderRadius: "15px" }} alt="Slide 2" />
      </SwiperSlide>
    </Swiper>
  );
}


//  style={{ width: "300px" }}