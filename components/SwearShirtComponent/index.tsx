import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import cs from 'classnames';
import Circle from "../Circle";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SweatshirtComponent:React.FC<{}> = (props) => {

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
          navigation
        >
          <SwiperSlide key={`slide-1`} tag="li">
            <img
              src={`/images/personnalise/sweat/Sweat-shirt-1.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide1`}
            />
             <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
            Sweatshirt-Basic-longues/unisex
            <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(27 26 31)'  /></span>
           </div>
            <span>基本中性圆领卫衣</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-2`} tag="li">
            <img
              src={`/images/personnalise/sweat/Sweat-shirt-2.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide1`}
            />
             <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
            Sweatshirt-Basic-longues/unisex
            <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(229 229 229)'  /></span>
           </div>
            <span>基本中性圆领卫衣</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-3`} tag="li">
            <img
              src={`/images/personnalise/sweat/Sweat-shirt-3.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide1`}
            />
            <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
            Sweatshirt-Basic-longues/unisex
            <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(152 29 31)'  /></span>
           </div>
            <span>基本中性圆领卫衣</span>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`slide-3`} tag="li">
            <img
              src={`/images/personnalise/sweat/Sweat-shirt-4.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide1`}
            />
             <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
            Sweatshirt-Basic-longues/unisex
            <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(158 149 115)'  /></span>
           </div>
            <span>基本中性圆领卫衣</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SweatshirtComponent;