import React from "react";
import styles from './index.module.css';
import fotor1 from '@/public/images/card/fotor1.png';
import fotor2 from '@/public/images/card/fotor2.png';
import fotor3 from '@/public/images/card/fotor3.png';
import fotor4 from '@/public/images/card/fotor4.png';
import fotor5 from '@/public/images/card/fotor5.png';
import fotor6 from '@/public/images/card/fotor6.png';
import fotor7 from '@/public/images/card/fotor7.png';


export default function Card() {
  
  return (
    <div className={styles.card}>
      <div className={styles.item} id="water-fall-01">
        <img src={fotor1.src} alt="" />
        <img src={fotor3.src} alt="" />
        <img src={fotor5.src} alt="" />
      </div>
      <div className={styles.item} id="water-fall-02">
        <img src={fotor2.src} alt="" />
        <img src={fotor4.src} alt="" />
        <img src={fotor6.src} alt="" />
        <img src={fotor7.src} alt="" />
      </div>
    </div>
  )
}
