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
            src={`/images/polo/Polo-${i + 1}.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i+1}`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>POLO-Basic-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
      );
    }
    return arr;
  })();

  const renderPoloLong = () => {
    return (
      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
         <SwiperSlide className="flex flex-col" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-1.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>POLO-Luxe-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-4.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>POLO-Luxe-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>POLO-Luxe-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-3.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>POLO-Luxe-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
       
      </Swiper>
    )
  }

  return (
    <div className={styles.shirt}>
      <div className={styles.short}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Polo</span>
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
      <div className={cs(
        'my-4',
        styles.short
      )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Polo luxe</span>
          <span className="md:text-[18px] text-[8px]">court</span>
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
            src={`/images/polo/Polo-luxe-1.jpg`}
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
            src={`/images/polo/Polo-luxe-2.png`}
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
          <span className="md:text-2xl text-1xl font-bold">Polo</span>
          <span className="md:text-[18px] text-[8px]">Basic long</span>
        </div>
        {renderPoloLong()}
      </div>
    </div>
  )
}

export default PoloComponent;