
"use client";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "../Card/Card";
import useDeviceType from "@/hooks/useDeviceType";

function Carousel({heading,  slides }) {
  const deviceType = useDeviceType();
  console.log(deviceType)
  return (
    <div className={styles.wrapper}>
      <h2>{heading}</h2>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={deviceType =="desktop" ? 50 : 20}
        slidesPerView={deviceType == "mobile" ? 1 : 2}
        loop="true"
        navigation
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide ,i) =>
          <SwiperSlide key={i + slide.country}><Card data={slide}/></SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}



export default Carousel;
