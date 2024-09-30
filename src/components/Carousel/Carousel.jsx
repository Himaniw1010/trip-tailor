
"use client";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "../Card/Card";

function Carousel({heading,  slides }) {

  return (
    <div className={styles.wrapper}>
      <h2>{heading}</h2>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        loop="true"
        navigation
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) =>
          <SwiperSlide><Card data={slide}/></SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default Carousel;
