import React from "react";
import styles from './index.module.css';
import cs from 'classnames';
import vietnamien1 from '@/public/images/foods/vietnamien/vietnamien1.png'
import vietnamien2 from '@/public/images/foods/vietnamien/vietnamien2.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Vietnamien() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
        <span>Vietnamien</span>
        <div>越餐</div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <img src={vietnamien1.src} alt="" />
        </div>
        <div className={cs(
          'flex items-center',
          styles.contentItem
        )}>
        <img src={vietnamien2.src} alt="" />
        </div>
        <div className="opacity-0">
        {/* <img src={vietnamien2.src} alt="" /> */}
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 md:mb-4 mb-0  px-2 w-full">
        <FooterLocation leftLocation="/projectMenu/vietnamien/vietnamien2" />
        </div>
    </div>
  )
}