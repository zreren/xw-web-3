import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TshirtComponent:React.FC<{}> = (props) => {

  const slides = (function() {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-${i + 1}.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i+1}`}
          />
        </SwiperSlide>
      );
    }
    return arr;
  })();

  // const longSlides = (function() {
  //   const arr = [];
  //   for (let i = 0; i < 2; i++) {
  //     arr.push(
  //       <SwiperSlide key={`slide-${i}`} tag="li">
  //         <img
  //           src={`/images/personnalise/longtshirt/Shirt-Long${i + 1}.png`}
  //           style={{ listStyle: 'none' }}
  //           alt={`Slide ${i+1}`}
  //         />
  //       </SwiperSlide>
  //     );
  //   }
  //   return arr;
  // })();

  return (
    <div className={styles.shirt}>
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
        >
          {slides}
        </Swiper>
      </div>
      <div className={styles.short}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">T-shirt</span>
          <span className="md:text-[18px] text-[8px]">Basic long</span>
        </div>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
           <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/personnalise/longtshirt/Shirt-Long1.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
        </SwiperSlide>
        <SwiperSlide key={`slide-2`} tag="li">
          <img
            src={`/images/personnalise/longtshirt/Shirt-Long2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default TshirtComponent;