import React, { useState } from "react";
import styles from './index.module.css';
import cs from 'classnames';
import router from 'next/router';
import japonais1 from '@/public/images/foods/japonais6/sushi-do-1.png'
import japonais2 from '@/public/images/foods/japonais6/sushi-do-2.png'
import japonais3 from '@/public/images/foods/japonais6/sushi-do-3.png'
import japonais4 from '@/public/images/foods/japonais6/sushi-do-4.png'
import FooterLocation from "@/components/FooterLocation";

export default function Japonais6() {

  const gotoJaponais = () => {
    router.push({
      pathname: '/projectMenu/japonais'
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <><span className="cursor-pointer" onClick={gotoJaponais}>Japonais</span><div className="cursor-pointer">日餐</div></>
      </div>
      <div className={styles.content}>
        <div className={cs(
          'md:w-5/12 w-full flex flex-col',
          styles.contentItem)}>
          <div className="italic text-[28px]  tracking-wider">
          Sushi auxerre,
          </div>
          <div className="italic tracking-wider text-[24px] font-extralight">
          2022, 24 pages
          </div>
          <div className="italic tracking-wider text-[24px] font-extralight">
          couverture toile, pages intérieur mat
          </div>
          <div className="italic tracking-wider text-[24px] font-extralight">
          Image photo par E.design
          </div>
          <div className="tracking-wider text-[18px] font-thin">
          封面布纹膜，内页哑光
          </div>
          <div className="tracking-wider text-[18px] font-thin">
          所有餐点图片由 Edesign 摄影师 Lea 拍摄
          </div>
        </div>
        <div className={cs(
          'w-full flex-1 items-center relative',
          styles.contentItem
        )}>
          <div className="relative -mt-8">
            <img src={japonais1.src} alt="" />
            <img className="absolute -bottom-80" src={japonais2.src} alt="" />
          </div>
          <div className="mt-48">
            <img src={japonais3.src} alt="" />
            <img className="" src={japonais4.src} alt="" />
          </div>
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu/japonais" />
        </div>
    </div>
  )
}