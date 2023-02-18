import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const WorkCloth:React.FC<{}> = () => {

  const slides = (function() {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(
        <SwiperSlide className={styles.slide} key={`slide-1`}>
          <img
            className="" 
            src={`/images/personnalise/workCloth/fotor${i + 1}.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i+1}`}
          />
        </SwiperSlide>
      );
    }
    return arr;
  })();

  return (
    <Swiper
        className={styles.tablierSwiper}
        modules={[Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={2}
      >
        {slides}
      </Swiper>
  )
}

export default WorkCloth;