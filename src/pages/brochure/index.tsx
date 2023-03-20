import React, { useState }  from "react";
import { NextPage } from "next";
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image'
import depliant1 from '@/public/images/depliant/depliant-1.png';
import brochure1 from '@/public/images/brochure/brochure-1.png';
import brochure2 from '@/public/images/brochure/brochure-2.png';
import brochure3 from '@/public/images/brochure/brochure-3.png';
import menuLight from '@/public/images/home/menuLight.png'
import Navigation  from "@/components/Navigation";
import styles from "./index.module.css";
import FooterLocation from "@/components/FooterLocation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SNavigation, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Fade } from "react-awesome-reveal";

const Brochure: NextPage<{}> = () => {
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }

  return (
    <div className={styles.depliant}>
      {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}

      <Fade direction="right" triggerOnce>
       <nav className={styles.nav}>
        <div>
            <Link href={"/"}><span className='font-bold'>E.</span></Link>
            <Link href={"/"}>
              <span className='font-semibold tracking-wider'>design</span>
              </Link>
            <Link href='/' className='md:text-3xl text-2xl ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={toogleNavigation}>
          <Image className="bg-black bg-blend-screen" src={menuLight} alt="navlogo" />
        </div>
      </nav>
      <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-white'>小雯工作室</div>

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.menu}>
            <div>
            <li className="mb-4 font-bold text-blue-600">
              <span>Depliant</span>
              <span className="md:text-4xl text-xl">折纸</span>
            </li>
            <Image src={depliant1} alt="" />
            </div>
            
            <div>
            <Link href={"/projectMenu?active=brochure&subMenu=brochure"}>
              <li>
                <span>Brochure</span>
                <span>册子</span>
              </li>
              </Link>
              <Link href={"/projectMenu?active=brochure&subMenu=flyer"}>
              <li className="my-4">
                <span>Flyer</span>
                <span>广告纸</span>
              </li>
              
              </Link>
              <Link href={"/projectMenu?active=brochure&subMenu=affiche"}>
              <li>
                <span>Affiche</span>
                <span>海报</span>
              </li>
              </Link>
            </div>
            
          </div>
        </div>
        <div className={styles.contentRight}>
        <Swiper
        className={styles.tablierSwiper}
        modules={[SNavigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.slide} key={`slide-1`}>
        <Image className="w-full" src={brochure1} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide} key={`slide-2`}>
            <Image className="w-full" src={brochure2} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide} key={`slide-2`}>
            <Image className="w-full" src={brochure3} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
      </div>

      </Fade>
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation hidden="right" leftLocation="/projectMenu?active=brochure&subMenu=brochure" />
      </div>
    </div>
  )
}

export default Brochure;