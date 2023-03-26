import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Circle from "../Circle";
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

//   <div className="md:text-[16px] text-[8px] flex flex-col items-center">
//   <div className="flex items-center relative">
//   Tablier complet JNI/unisex
//     <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(76 47 51)' /></span>
//   </div>
//   <span>全身围裙011</span>
// </div>
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
          {/* {slides} */}
          <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/accessoires/accessoires-01.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center absolute">
              <div className="flex items-center relative">
              Tablier complet JNI/unisex
                <span style={{ left: '5rem' }} className="absolute"><Circle radius={6} fill='rgb(167 35 31)' /></span>
                <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(76 47 51)' /></span>
                <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(32 103 246)' /></span>
              </div>
              <span>全身围裙011</span>
            </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/accessoires/accessoires-02.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center absolute">
              <div className="flex items-center relative">
              Tablier complet JNI/unisex
                <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(76 47 51)' /></span>
              </div>
              <span>全身围裙011</span>
            </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/accessoires/accessoires-03.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide1`}
          />
           <div style={{ marginRight: '36px' }} className="md:text-[16px] text-[8px] flex flex-col items-center">
              <div className="flex items-center relative">
              Tablier complet JNI/unisex
                <span style={{ left: '4rem' }} className="absolute"><Circle radius={6} fill='rgb(150 194 161)' /></span>
                <span style={{ left: '5rem' }} className="absolute"><Circle radius={6} fill='rgb(76 47 51)' /></span>
              </div>
              <span>全身围裙011</span>
            </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AccessoiresComponent;