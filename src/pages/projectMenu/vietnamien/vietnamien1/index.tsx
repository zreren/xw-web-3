import React, { useState } from "react";
import styles from './index.module.css';
import cs from 'classnames';
import router from 'next/router';
import Image from "next/image";
import viet1 from '@/public/images/foods/vietnamien1/viet-1.png'
import viet2 from '@/public/images/foods/vietnamien1/viet-2.png'
import viet3 from '@/public/images/foods/vietnamien1/viet-3.png'
import FooterLocation from "@/components/FooterLocation";

export default function Vietnamien() {
  const [title, setTitle] = useState<string>('Vietnamien')

  const gotoJaponais = () => {
    router.push({
      pathname: '/projectMenu/japonais'
    })
  }

  return (
    <div className={styles.container}>
      <div className={cs(
        'fixed z-[100]',
        styles.title
      )} onMouseEnter={() => setTitle('Japonais')} onMouseLeave={() => setTitle('Vietnamien')}>
        {
          title === 'Vietnamien' ? (
            <><span className="cursor-pointer">Vietnamien</span><div className="cursor-pointer">越餐</div></>
            ) : (
              <><span className="cursor-pointer text-blue-500" onClick={gotoJaponais}>Japonais</span><div className="cursor-pointer text-blue-500">日餐</div></>
          )
          }
      </div>
      <div className={styles.content}>
        <div className={cs(
          'md:w-5/12 w-full flex flex-col fixed mt-36 z-[100]',
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
        <div className="md:w-5/12"></div>
        <div className={cs(
          'w-full flex-1 items-center',
          styles.contentItem
        )}>
          <Image src={viet1} alt="" />
          <div className="relative md:h-[870px] h-[600px]">
            <Image className="absolute md:-top-72 -top-40"  src={viet2} alt="" />
            <Image className="absolute bottom-0" src={viet3} alt="" />
          </div>
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 md:mb-4 mb-0  px-2 w-full">
        <FooterLocation leftLocation="/projectMenu/vietnamien" />
        </div>
    </div>
  )
}