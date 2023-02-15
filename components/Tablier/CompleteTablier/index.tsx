import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import cs from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CompleteTablier:React.FC<{}> = (props) => {


  return (
    <div className={styles.shirt}>
       <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet</span>
          <span className="md:text-[18px] text-[8px]">001</span>
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
            src={`/images/tablier/complete/Tablier-Complet-1.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙001 蓝灰色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-2`} tag="li">
          <img
            src={`/images/tablier/complete/Tablier-Complet-2.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 2`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙001 黑色</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      {/* 002 */}
      <div className={cs(
        styles.short,
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complete</span>
          <span className="md:text-[18px] text-[8px]">002</span>
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
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
            <img
              src={`/images/tablier/complete/Tablier-002-1.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide 1`}
            />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙002 黑色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
            <img
              src={`/images/tablier/complete/Tablier-002-2.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide 1`}
            />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙002 红色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
            <img
              src={`/images/tablier/complete/Tablier-002-3.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide 1`}
            />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙002 灰色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
            <img
              src={`/images/tablier/complete/Tablier-002-4.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide 1`}
            />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙002 蓝色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
            <img
              src={`/images/tablier/complete/Tablier-002-5.jpg`}
              style={{ listStyle: 'none' }}
              alt={`Slide 1`}
            />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙002 牛仔蓝色</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      {/* 004 */}
      <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet</span>
          <span className="md:text-[18px] text-[8px]">004</span>
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
            src={`/images/tablier/complete/Tablier-004-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 004/unisex</span>
            <span>全身翻领围裙006 黑色</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      {/* 005 */}
      <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet</span>
          <span className="md:text-[18px] text-[8px]">005</span>
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
            src={`/images/tablier/complete/Tablier-005-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 005/unisex</span>
            <span>全身薄牛仔布围裙006 咖啡色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/complete/Tablier-005-2.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 005/unisex</span>
            <span>全身薄牛仔布围裙006 006 黑色</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

       {/* 006 */}
       <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet</span>
          <span className="md:text-[18px] text-[8px]">006</span>
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
            src={`/images/tablier/complete/Tablier-006-1.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 006/unisex</span>
            <span>全身薄牛仔布围裙006 浅蓝色</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      {/* 007 */}
      <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet en jean</span>
          <span className="md:text-[18px] text-[8px]">007</span>
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
            src={`/images/tablier/complete/Tablier-007-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet en jean 007/unisex</span>
            <span>全身牛仔布围裙007 卡其色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/complete/Tablier-007-2.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet en jean 007/unisex</span>
            <span>全身牛仔布围裙007 深黑色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/complete/Tablier-007-3.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet en jean 007/unisex</span>
            <span>全身牛仔布围裙007 抹茶色</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/complete/Tablier-007-4.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet en jean 007/unisex</span>
            <span>全身牛仔布围裙007 浅灰色</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      {/* 010 */}
      <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet</span>
          <span className="md:text-[18px] text-[8px]">010</span>
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
            src={`/images/tablier/complete/Tablier-010-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 010/unisex</span>
            <span>全身围裙010 蓝</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col" key={`slide-1`} tag="li">
          <img
            src={`/images/tablier/complete/Tablier-010-2.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 010/unisex</span>
            <span>全身围裙010 黑</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      {/* 010 */}
      <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet</span>
          <span className="md:text-[18px] text-[8px]">011</span>
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
            src={`/images/tablier/complete/Tablier-011-1.png`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet 001/unisex</span>
            <span>全身围裙011</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      {/* JN1 */}
      <div className={cs(
          styles.short
        )}>
        <div className={styles.title}>
          <span className="md:text-2xl text-1xl font-bold">Tablier complet</span>
          <span className="md:text-[18px] text-[8px]">JNI</span>
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
            src={`/images/tablier/complete/Tablier-JNI-1.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide 1`}
          />
          <div className="md:text-[16px] text-[8px] flex flex-col items-center">
            <span>Tablier complet JNI/unisex</span>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CompleteTablier;