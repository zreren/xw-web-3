import React from "react";
import styles from './index.module.css';
import coreen1 from '@/public/images/foods/coreen/coreen1.png'
import coreen2 from '@/public/images/foods/coreen/coreen2.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Coreen() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
        <span>Coréen</span>
        <div>韩餐</div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <img src={coreen1.src} alt="" />
        </div>
        <div className={styles.contentItem}>
        <img src={coreen2.src} alt="" />
        </div>
        <div className="opacity-0">
        <img src={coreen1.src} alt="" />
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}