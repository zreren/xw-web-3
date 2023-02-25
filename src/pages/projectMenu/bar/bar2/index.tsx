import React, { useState } from "react";
import styles from './index.module.css';
import cs from 'classnames';
import router from 'next/router';
import Image from "next/image";
import bar3 from '@/public/images/bar/bar3.png'
import bar4 from '@/public/images/bar/bar4.png'
import FooterLocation from "@/components/FooterLocation";

export default function Bar1() {
  const [title, setTitle] = useState<string>('Bar')
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
      )} onMouseEnter={() => setTitle('Japonais')} onMouseLeave={() => setTitle('Bar')}>
        {
          title === 'Bar' ? (
            <><span className="cursor-pointer">BAR</span><div className="cursor-pointer">酒吧</div></>
            ) : (
              <><span className="cursor-pointer text-blue-500" onClick={gotoJaponais}>Japonais</span><div className="cursor-pointe text-blue-500">日餐</div></>
          )
          }
      </div>
      <div className={styles.content}>
        <div className={cs(
          'md:w-2/12 w-full flex flex-col fixed mt-36 z-[100]',
          styles.contentItem)}>
          <div className="italic text-[28px]  tracking-wider">
          Planet work,
          </div>
          <div className="italic tracking-wider text-[24px] font-extralight">
          2022, carte de vins
          </div>
          <div className="italic tracking-wider text-[24px] font-extralight">
          couverture mat
          </div>
          <div className="tracking-wider text-[18px] font-thin">
          页面哑光
          </div>
        </div>
        <div className="md:w-2/12"></div>
        <div className={cs(
          'w-full flex-1 items-center mt-16',
          styles.contentItem
        )}>
          <Image src={bar3} alt="" />
          <div className={`relative md:h-[900px] h-[50px]`}>
            <Image className="absolute md:-top-8 top-8" src={bar4} alt="" />
          </div>
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu/japonais" />
        </div>
    </div>
  )
}