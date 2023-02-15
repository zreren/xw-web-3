import React from "react";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import cs from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'
import TablierHome2 from '@/public/images/tablier/Tablier-home2.png';
import TablierHome1 from '@/public/images/tablier/Tablier-home1.png';

const Tablier:React.FC<{}> = (props) => {

  return (
    <Swiper
        className={styles.tablierSwiper}
        modules={[Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.slide} key={`slide-1`}>
        <Image className="w-full" src={TablierHome1} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide} key={`slide-2`}>
            <Image className="w-full" src={TablierHome2} alt="" />
        </SwiperSlide>
      </Swiper>
  )
}

export default Tablier;