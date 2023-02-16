import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AccessoiresComponent:React.FC<{}> = (props) => {

  const slides = (function() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <img
            src={`/images/accessoires/accessoires-0${i + 1}.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i+1}`}
          />
        </SwiperSlide>
      );
    }
    return arr;
  })();


  return (
    <div className={styles.sweatshirt}>
      <div className={styles.short}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">T-shirt</span>
          <span className="md:text-[18px] text-[8px]">Basic court</span>
        </div>
        <Swiper
          className="w-full"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
        >
          {slides}
        </Swiper>
      </div>
    </div>
  )
}

export default AccessoiresComponent;