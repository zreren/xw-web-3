import React from "react";
import styles from './index.module.css';
import thailandais1 from '@/public/images/foods/thailandais/thailandais1.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Thailandais() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
        <span>Thaïlandais</span>
        <div>中餐</div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <img src={thailandais1.src} alt="" />
        </div>
        <div className="opacity-0">
          <img src={thailandais1.src} alt="" />
        </div>
        <div className="opacity-0">
          <img src={thailandais1.src} alt="" />
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 md:mb-4 mb-0  px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}