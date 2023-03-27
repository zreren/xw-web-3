import React, { useState, useImperativeHandle, forwardRef } from "react";
import { animated, useTransition } from "react-spring";
import router from 'next/router';
import Image from "next/image";
import cs from 'classnames';
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from './index.module.css';
import depliant1 from './img/depliant-1.png';
import depliant2 from './img/depliant-2.png';
import depliant3 from './img/depliant-3.png';
import brochure1 from './img/brochure-1.png';
import brochure2 from './img/brochure-2.png';
import brochureSlide1 from '@/public/images/brochure/brochure-1.png';
import brochureSlide2 from '@/public/images/brochure/brochure-2.png';
import brochureSlide3 from '@/public/images/brochure/brochure-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SNavigation, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import piles1 from '@/public/images/depliant/piles-1.png';
import piles2 from '@/public/images/depliant/piles-2.png';
import piles3 from '@/public/images/depliant/piles-3.png';
import piles4 from '@/public/images/depliant/piles-4.png';
import piles5 from '@/public/images/depliant/piles-5.png';
import flyer1 from './img/flyer-1.png';
import flyer2 from './img/flyer-2.png';
import flyer3 from './img/flyer-3.png';
import affiche from './img/affiche.png';
import affiche1 from '@/public/images/affiche/affiche-1.png';
import affiche2 from '@/public/images/affiche/affiche-2.png';
import affiche3 from '@/public/images/affiche/affiche-3.png';

interface IAdvertisement {
  onHandleChangeScreen: () => void,
  viewImage:boolean
}

export type AdvertisementRef = {
  activeMenu: string
}

const Advertisement = forwardRef<AdvertisementRef, IAdvertisement>((props, ref) => {
  const { onHandleChangeScreen, viewImage } = props;
  const { query, pathname } = useRouter();
  const { page } = query;
  const [activeMenu, setActiveMenu] = useState<string>('');
  const [imageVisible, setImageVisible] = useState<Record<string, boolean>>({
    depliantone: false,
    deplianttwo: false,
    depliantthree: false,
    brochureone: false,
    brochuretwo: false,
    afficheone: false,
  });

  // card 整体切换动画
  const transitions = useTransition(activeMenu, {
    from: { opacity: 0, transform: "translateY(150%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    // leave: { opacity: 0, transform: "translateY(-50%)" },
  });

  const handClickMenu = (menu: string) => {
    if(viewImage) {
      onHandleChangeScreen()
      setActiveMenu(menu)
    } else {
      setActiveMenu(menu)
    }
  }

  const hanClickImage = (imagestr: string) => {
    onHandleChangeScreen()
    setImageVisible(pre => {
      const res = Object.fromEntries(Object.entries(pre).map(item => ([item[0], false])))
      return {
        ...res,
        [`${imagestr}`]: true,
      }
    })
    query.page = imagestr;
  }

  useImperativeHandle(ref, () => ({
    activeMenu: activeMenu,
  }))
  
  return (
    <div className="">
    <ul className={cs(
      styles.advertisement,
      activeMenu && styles.unActiveText,
      activeMenu === 'depliant' && styles.depliantPosition,
      activeMenu === 'brochure' && styles.brochurePosition,
      activeMenu === 'flyer' && styles.flyerPosition,
      activeMenu === 'affiche' && styles.affichePosition,
    )}>
        <li className={cs(styles.contentOne, activeMenu === 'depliant'? styles.active : "")} onClick={() => handClickMenu('depliant')}>
          <span>Depliant 折页 </span>
        {activeMenu === 'depliant' && (
          transitions(
            (style, item) =>
              item && (
              <animated.div style={{ ...style }} className={styles.depliant}>
                {(imageVisible.depliantone || !viewImage) && <Image onClick={() => hanClickImage('depliantone')} src={depliant1} alt="" />}
                {(imageVisible.deplianttwo || !viewImage) && <Image onClick={() => hanClickImage('deplianttwo')} src={depliant2} alt=""  />}
                {(imageVisible.depliantthree || !viewImage) && <Image onClick={() => hanClickImage('depliantthree')} src={depliant3} alt=""  />}
              </animated.div>
            ))
        )}
        </li>
        <li className={cs(styles.contentTwo, activeMenu === 'brochure'? styles.active : "")}  onClick={() => handClickMenu('brochure')}>
          <span>Brochure 册子</span>
          {activeMenu === 'brochure' && (
            transitions(
              (style, item) =>
                item && (
                <animated.div style={{ ...style }} className={styles.depliant}>
                  {(imageVisible.brochureone || !viewImage) && <Image onClick={() => hanClickImage('brochureone')}  src={brochure1} alt="" />}
                  {(imageVisible.brochuretwo || !viewImage) && <Image onClick={() => hanClickImage('brochuretwo')}  src={brochure2} alt=""  />}
                </animated.div>
              ))
          )}
        </li>
        <li className={cs(styles.contentThree, activeMenu === 'flyer'? styles.active : "")}  onClick={() => handClickMenu('flyer')}>
          <span>Flyer 广告纸</span>
          {activeMenu === 'flyer' && (
            transitions(
              (style, item) =>
                item && (
                <animated.div style={{ ...style }} className={styles.flyer}>
                  {(imageVisible.flyerone || !viewImage) && <Image onClick={() => hanClickImage('flyerone')} src={flyer1} alt="" />}
                  {(imageVisible.flyertwo || !viewImage) && <Image onClick={() => hanClickImage('flyertwo')} src={flyer2} alt=""  />}
                  {(imageVisible.flyerthree || !viewImage) && <Image onClick={() => hanClickImage('flyerthree')} src={flyer3} alt=""  />}
                </animated.div>
              ))
          )}
        </li>
        <li className={cs(styles.contentFour, activeMenu === 'affiche'? styles.active : "")}  onClick={() => handClickMenu('affiche')}>
          <span>Affiche 海报</span>
          {activeMenu === 'affiche' && (
            transitions(
              (style, item) =>
                item && (
                <animated.div style={{ ...style }} className={styles.flyer}>
                  <Image src={affiche} onClick={() => hanClickImage('afficheone')} alt="" />
                </animated.div>
              ))
          )}
        </li>
    </ul>
    {/* Depliant */}
    {((imageVisible.depliantone || imageVisible.deplianttwo || imageVisible.depliantthree) && viewImage) && <div className="relative">
    <div className={styles.pilis}>
          <Link className={page === 'two' ? styles.pilisactive : ''} href={`${pathname}?page=two`}><li> 
            <span> 2 plis</span><span>兩折頁</span>
              </li></Link>
          <Link className={page === 'three' ? styles.pilisactive : ''} href={`${pathname}?page=three`}><li>  
            <span> 3 plis</span><span>三折頁</span>
              </li></Link>
          <Link className={page === 'four' ? styles.pilisactive : ''} href={`${pathname}?page=four`}><li> 
          <span> 4 plis</span><span>四折頁</span>
              </li></Link>
            {(imageVisible.depliantone) && <Link className={page === 'five' ? styles.pilisactive : ''} href={`${pathname}?page=five`}><li> 
        <span> 5 plis</span><span>五折頁</span>
            </li></Link>}
            {imageVisible.depliantone && <Link className={page === 'six' ? styles.pilisactive : ''} href={`${pathname}?page=six`}><li> 
        <span> 6 plis</span><span>六折頁</span>
            </li></Link>}
        </div>
        <div className={styles.pilesContent}>
            {page === 'two' && <Image src={piles1} alt="" />}
            {page === 'three' && <Image src={piles2} alt="" />}
            {page === 'four' && <Image src={piles3} alt="" />}
            {page === 'five' && <Image src={piles4} alt="" />}
            {page === 'six' && <Image src={piles5} alt="" />}
        </div>
      </div>}
      {/* Brochure */}
      {((imageVisible.brochureone || imageVisible.brochuretwo) && viewImage) && <div style={{ width: '80%' }} className="absolute right-0">
        <div className={styles.brochure}>
        <Swiper
        modules={[SNavigation]}
      >
        <SwiperSlide className={styles.slide} key={`slide-1`}>
        <Image className="w-full" src={brochureSlide1} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide} key={`slide-2`}>
            <Image className="w-full"src={brochureSlide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide} key={`slide-2`}>
            <Image className="w-full" src={brochureSlide3} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
        </div>}

        {/* flyer */}

        {/* Affiche */}
        {((imageVisible.afficheone) && viewImage) && <div style={{ width: '80%' }} className="absolute right-0">
        <div className={styles.affiche}>
        <Swiper
        modules={[SNavigation]}
      >
        <SwiperSlide className={styles.slide} key={`slide-1`}>
        <Image className="w-full" src={affiche1} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide} key={`slide-2`}>
            <Image className="w-full"src={affiche2} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide} key={`slide-2`}>
            <Image className="w-full" src={affiche3} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
        </div>}
    </div>
  )
})

export default Advertisement;