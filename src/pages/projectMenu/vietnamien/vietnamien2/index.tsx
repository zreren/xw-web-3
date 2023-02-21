import React from "react";
import styles from './index.module.css';
import cs from 'classnames';
import viet1 from '@/public/images/foods/vietnamien2/viet1.png'
import viet2 from '@/public/images/foods/vietnamien2/viet2.png'
import viet3 from '@/public/images/foods/vietnamien2/viet3.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Vietnamien() {

  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <span>Vietnamien</span>
        <div>越餐</div>
      </div>
      <div className={styles.content}>
        <div className={cs(
          'w-5/12 flex flex-col',
          styles.contentItem)}>
          <div className="italic text-[28px]  tracking-wider">
          Asian Gourmet,
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
          'w-full flex-1 items-center',
          styles.contentItem
        )}>
          <img src={viet1.src} alt="" />
          <img src={viet2.src} alt="" />
          <img src={viet3.src} alt="" />
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}