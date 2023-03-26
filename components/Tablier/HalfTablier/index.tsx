import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Circle from "@/components/Circle";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import cs from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PoloComponent:React.FC<{}> = (props) => {

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
           <SwiperSlide className="flex flex-col mt-8" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/half/Tablier-court-1.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
          T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='bg-black'  /></span>
           </div>
            <span>基本中性圆领短袖</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-8" key={`slide-2`} tag="li">
          <img
            src={`/images/tablier/half/Tablier-court-2.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
          <div className="flex items-center relative">
          T-shirt-Basic-Manches courtes/unisex
            <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(229 229 229)'  /></span>
           </div>
            <span>基本中性圆领短袖</span>
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
          navigation
        >
          <SwiperSlide className="flex flex-col mt-8" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/tablier-court-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <div className="flex items-center relative">
              Tablier à col roulé Basic longues/unisex
              <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(80 74 71)'  /></span>
            </div>
            <span>半身长围裙 灰色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-8" key={`slide-2`} tag="li">
          <img
            src={`/images/tablier/tablier-court-2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
           <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <div className="flex items-center relative">
              Tablier à col roulé Basic longues/unisex
              <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(33 37 52)'  /></span>
            </div>
            <span>半身长围裙 蓝色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-8" key={`slide-3`} tag="li">
          <img
            src={`/images/tablier/tablier-court-3.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 3`}
          />
            <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <div className="flex items-center relative">
              Tablier à col roulé Basic longues/unisex
              <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(171 157 145)'  /></span>
            </div>
            <span>半身长围裙 米色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col mt-8" key={`slide-4`} tag="li">
          <img
            src={`/images/tablier/tablier-court-4.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 4`}
          />
            <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <div className="flex items-center relative">
              Tablier à col roulé Basic longues/unisex
              <span style={{ left: '7rem' }} className="absolute"><Circle radius={6} fill='rgb(221 239 230)'  /></span>
            </div>
            <span>半身长围裙 白色</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  )
}

export default PoloComponent;