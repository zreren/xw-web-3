import React, { useState } from "react";
import styles from './index.module.css';
import router from 'next/router';
import Link from "next/link";
import japonais1 from '@/public/images/foods/japonais/japonais1.png'
import japonais2 from '@/public/images/foods/japonais/japonais2.png'
import japonais3 from '@/public/images/foods/japonais/japonais3.png'
import japonais4 from '@/public/images/foods/japonais/japonais4.png'
import japonais5 from '@/public/images/foods/japonais/japonais5.png'
import japonais6 from '@/public/images/foods/japonais/japonais6.png'
import japonais7 from '@/public/images/foods/japonais/japonais7.png'
import japonais8 from '@/public/images/foods/japonais/japonais8.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Japonais() {
  const [title, setTitle] = useState<string>('Japonais')

  const gotoVietnamien = () => {
    router.push({
      pathname: '/projectMenu/vietnamien'
    })
  }

  return (
    <div className={styles.japonais}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title} onMouseEnter={() => setTitle('Vietnamien')} onMouseLeave={() => setTitle('Japonais')}>
        {
          title === 'Japonais' ? (
            <><span className="cursor-pointer">Japonais</span><div className="cursor-pointer">日餐</div></>
            ) : (
              <><span className="cursor-pointer text-blue-500" onClick={gotoVietnamien}>Vietnamien</span><div className="cursor-pointe text-blue-500">越餐</div></>
          )
          }
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <Link href={"/projectMenu/japonais/japonais1"}><img src={japonais1.src} alt="" /></Link>
          <Link href={"/projectMenu/japonais/japonais2"}>
            <img src={japonais2.src} alt="" />
          </Link>
          <Link className="relative" href={"/projectMenu/japonais/japonais3"}>
            <img className="absolute -bottom-4" src={japonais3.src} alt="" />
          </Link>
        </div>
        <div style={{ margin: '100px 0' }} className={styles.contentItem}>
        <Link href={"/projectMenu/japonais/japonais2"}>
            <img src={japonais4.src} alt="" />
          </Link>
          <Link className="relative" href={"/projectMenu/japonais/japonais5"}>
            <img className="absolute -bottom-4" src={japonais5.src} alt="" />
          </Link>
          <Link href={"/projectMenu/japonais/japonais8"}>
            <img src={japonais6.src} alt="" />
          </Link>
        </div>
        <div style={{ marginBottom: '2rem' }} className={styles.contentItem}>
        <Link className="relative" href={"/projectMenu/japonais/japonais2"}>
            <img className="absolute bottom-8" src={japonais7.src} alt="" />
          </Link>
          <Link href={"/projectMenu/japonais/japonais5"}>
            <img src={japonais8.src} alt="" />
          </Link>
          <Link href={"/projectMenu/japonais/japonais8"}>
            <img src={japonais8.src} alt="" />
          </Link>
        </div>
      </div>
        <div className="fixed bottom-0 md:mb-4 mb-0  md:px-12 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}