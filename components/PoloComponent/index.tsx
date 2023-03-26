import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Circle from "../Circle";
import cs from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PoloComponent:React.FC<{}> = (props) => {

  const renderPoloLong = () => {
    return (
      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
         <SwiperSlide className="flex flex-col mt-4" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Luxe-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='bg-black'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-4" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Luxe-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(229 229 229)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-4" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-3.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Luxe-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='bg-black'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-4" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-long-4.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Luxe-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(143 61 51)'  /></span>
           </div>
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
          <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/polo/Polo-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='bg-black'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/polo/Polo-2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(229 229 229)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/polo/Polo-3.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
            <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(152 29 31)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/polo/Polo-4.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(176 179 179)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-1`} tag="li">
          <img
            src={`/images/polo/Polo-5.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">POLO-Basic-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(215 171 151)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      <div className={cs(
        'md:mt-48 mt-12',
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
           <SwiperSlide className="flex flex-col mt-8" key={`slide-1`} tag="li">
          <img
            src={`/images/polo/Polo-luxe-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
            <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative"> POLO-Luxe-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(28 32 51)'  /></span>
           </div>
            <span>基本中性翻领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-8" key={`slide-2`} tag="li">
          <img
            src={`/images/polo/Polo-luxe-2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative"> POLO-Luxe-Manches courtes/unisex
            <span style={{ left: '6rem' }} className="absolute"><Circle radius={6} fill='rgb(27 26 31)'  /></span>
           </div>
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