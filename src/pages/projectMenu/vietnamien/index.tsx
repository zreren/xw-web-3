import React, { useState } from "react";
import styles from './index.module.css';
import router from 'next/router';
import Link from "next/link";
import cs from 'classnames';
import vietnamien1 from '@/public/images/foods/vietnamien/vietnamien1.png'
import vietnamien2 from '@/public/images/foods/vietnamien/vietnamien2.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Vietnamien() {
  const [title, setTitle] = useState<string>('vietnamien')
  const gotoJaponais = () => {
    router.push({
      pathname: '/projectMenu/japonais'
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title} onMouseEnter={() => setTitle('Japonais')} onMouseLeave={() => setTitle('vietnamien')}>
      {
          title === 'vietnamien' ? (
            <><span className="cursor-pointer">Vietnamien</span><div className="cursor-pointer">越餐</div></>
            ) : (
              <><span className="cursor-pointer text-blue-500" onClick={gotoJaponais}>Japonais</span><div className="cursor-pointe text-blue-500">日餐</div></>
          )
          }
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <Link href={"/projectMenu/vietnamien/vietnamien1"}><img src={vietnamien1.src} alt="" /></Link>
        </div>
        <div className={cs(
          'relative',
          styles.contentItem,
        )}>
          <Link href={"/projectMenu/vietnamien/vietnamien2"}>
            <img className="absolute bottom-40 ml-8" src={vietnamien2.src} alt="" />
          </Link>
        </div>
        <div className={cs('opacity-0', styles.contentItem)}>
        <img src={vietnamien2.src} alt="" />
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 md:mb-4 mb-0  px-2 w-full">
        <FooterLocation leftLocation="/newProjectMenu?active=design" />
        </div>
    </div>
  )
}