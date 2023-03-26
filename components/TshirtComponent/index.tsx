import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import cs from "classnames";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Circle from "../Circle";

const TshirtComponent:React.FC<{}> = (props) => {

  const slides = (function() {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-${i + 1}.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i+1}`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>T-shirt-Basic-Manches courtes/unisex</span>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
      );
    }
    return arr;
  })();

  return (
    <div className={styles.shirt}>
      {/* T-Shirt Basic court */}
      <div className={cs('md:mt-0 mt-12', styles.short)}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">T-shirt</span>
          <span className="md:text-[18px] text-[8px]">Basic court</span>
        </div>
        <Swiper
          className="w-full"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='bg-black'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-2`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(229 229 229)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-3`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-3.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide3`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(152 29 31)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-4`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-4.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide4`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(146 169 203)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-5`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-5.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide5`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(51 67 130)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-6`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-6.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide6`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(82 136 176)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-7`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-7.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide7`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(230 208 213)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-8`} tag="li">
          <img
            src={`/images/personnalise/shorttshirt/Shirt-court-8.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide8`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(72 123 98)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      {/* T-Shirt Basic long */}
      <div className={cs('md:mt-48 mt-12', styles.short)}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">T-shirt</span>
          <span className="md:text-[18px] text-[8px]">Basic long</span>
        </div>
        <Swiper
          className={cs('w-full', styles.longTshirt)}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
        >
           <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/personnalise/longtshirt/Shirt-Long1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
            T-shirt-Basic-Manches longues/homme 
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='bg-black'  /></span>
          </div>
            <span>基本男性圆领长袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mt-8" key={`slide-2`} tag="li">
          <img
            src={`/images/personnalise/longtshirt/Shirt-Long2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
           <div style={{ marginTop: '7px' }} className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
            T-shirt-Basic-Manches longues/homme 
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='bg-black'  /></span>
          </div>
            <span>基本男性圆领长袖</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default TshirtComponent;