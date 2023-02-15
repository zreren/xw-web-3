import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import cs from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PoloComponent:React.FC<{}> = (props) => {

  const slides = (function() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <SwiperSlide className="flex flex-col" key={`slide-${i}`} tag="li">
          <img
            src={`/images/tablier/Tablier-court-${i + 1}.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i+1}`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier à col roulé</span>
            <span>半身长围裙 灰色</span>
          </div>
        </SwiperSlide>
      );
    }
    return arr;
  })();

  return (
    <div className={styles.shirt}>
      <div className={cs(
        'my-4',
        styles.short
      )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier à col roulé</span>
          <span className="md:text-[18px] text-[8px]">Basic court</span>
        </div>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
           <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/half/Tablier-court-1.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>POLO-Luxe-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-2`} tag="li">
          <img
            src={`/images/tablier/half/Tablier-court-2.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>POLO-Luxe-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.short}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier à col roulé</span>
          <span className="md:text-[18px] text-[8px]">Basic longues</span>
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

export default PoloComponent;