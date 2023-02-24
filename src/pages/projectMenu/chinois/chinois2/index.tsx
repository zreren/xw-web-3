import React, { useEffect, useState, useRef } from "react";
import styles from './index.module.css';
import cs from 'classnames';
import router from 'next/router';
import Image from "next/image";
import chinois1 from '@/public/images/foods/chinois2/shi-fang-1.png'
import chinois2 from '@/public/images/foods/chinois2/shi-fang-2.png'
import chinois3 from '@/public/images/foods/chinois2/shi-fang-3.png'
import chinois4 from '@/public/images/foods/chinois2/shi-fang-4.png'
import FooterLocation from "@/components/FooterLocation";

export default function Chinois1() {
  const [title, setTitle] = useState<string>('Chinois')
  const [height, setHeight] = useState<number>();
  const ref = useRef(null)
  const gotoJaponais = () => {
    router.push({
      pathname: '/projectMenu/japonais'
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title} onMouseEnter={() => setTitle('Japonais')} onMouseLeave={() => setTitle('Chinois')}>
        {
          title === 'Chinois' ? (
            <><span className="cursor-pointer">Chinois</span><div className="cursor-pointer">中餐</div></>
            ) : (
              <><span className="cursor-pointer text-blue-500" onClick={gotoJaponais}>Japonais</span><div className="cursor-pointe text-blue-500">日餐</div></>
          )
          }
      </div>
      <div className={styles.content}>
        <div className={cs(
          'md:w-5/12 w-full flex flex-col',
          styles.contentItem)}>
          <div className="italic text-[28px]  tracking-wider">
          Han shi fang,
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
          'flex-1 items-center -mt-4',
          styles.contentItem
        )}>
          <Image src={chinois1} alt="" />
          <div className={`relative md:h-[1200px] h-[840px]`}>

            <Image className="absolute md:-top-80 -top-48" src={chinois2} alt="" />
            <Image className="absolute md:top-36 bottom-72" src={chinois3} alt="" />
            <Image className="absolute bottom-0" src={chinois4} alt="" />
          </div>
          
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu/japonais" />
        </div>
    </div>
  )
}