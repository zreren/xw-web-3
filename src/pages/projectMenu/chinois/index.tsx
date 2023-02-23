import React from "react";
import styles from './index.module.css';
import Link from 'next/link';
import chinois1 from '@/public/images/foods/chinois/chinois1.png'
import chinois2 from '@/public/images/foods/chinois/chinois2.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Japonais() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
        <span>Chiois</span>
        <div>中餐</div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <Link href={"/projectMenu/chinois/chinois1"}>
          <img src={chinois2.src} alt="" />
          </Link>
        </div>
        <div className={styles.contentItem}>
        <img src={chinois1.src} alt="" />
        </div>
        <div className="opacity-0">
        <img src={chinois2.src} alt="" />
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}