import React, { useState } from "react";
import styles from './index.module.css';
import cs from 'classnames';
import router from 'next/router';
import viet1 from '@/public/images/foods/vietnamien2/viet1.png'
import viet2 from '@/public/images/foods/vietnamien2/viet2.png'
import viet3 from '@/public/images/foods/vietnamien2/viet3.png'
import viet4 from '@/public/images/foods/vietnamien2/viet4.png'
import Image from 'next/image';
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
        styles.title,
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
          'md:w-5/12 w-full flex flex-col sticky z-[100]',
          styles.contentItem)}>
          <div className="italic text-[28px]  tracking-wider">
          Vietnem kitchen,
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
          <Image className="absolute md:w-1/2 w-3/4 right-8 md:top-32 -bottom-64" src={viet1} alt="" />
      </div>
      <div className="md:h-[1700px] h-[750px] relative mt-16 mx-8 flex justify-center">
        <div className="w-full mt-48 relative">
          <Image src={viet3} alt="" /> 
          <Image src={viet2} alt="" /> 
          <Image className="absolute" src={viet4} alt="" /> 
        </div>

      </div>
        <div className="fixed bottom-0 md:px-12 md:mb-4 mb-0  px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}