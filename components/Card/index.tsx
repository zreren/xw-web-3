import React from "react";
import styles from './index.module.css';
import fotor1 from '@/public/images/card/fotor1.png';
import fotor2 from '@/public/images/card/fotor2.png';
import fotor3 from '@/public/images/card/fotor3.png';
import fotor4 from '@/public/images/card/fotor4.png';
import fotor5 from '@/public/images/card/fotor5.png';
import fotor6 from '@/public/images/card/fotor6.png';
import fotor7 from '@/public/images/card/fotor7.png';

interface ICardProp {
  handClickImage: (num: number) => void
}

export default function Card(props: ICardProp) {
  
  function clickImage(num: number) {
    const { handClickImage } = props;
    handClickImage(num)
  }

  return (
    <div className={styles.card}>
      <div className={styles.item} id="water-fall-01">
        <img onClick={() => clickImage(1)} src={fotor1.src} alt="" />
        <img onClick={() => clickImage(3)} src={fotor3.src} alt="" />
        <img src={fotor5.src} alt="" />
      </div>
      <div className={styles.item} id="water-fall-02">
        <img onClick={() => clickImage(2)}  src={fotor2.src} alt="" />
        <img onClick={() => clickImage(4)}  src={fotor4.src} alt="" />
        <img src={fotor6.src} alt="" />
        <img src={fotor7.src} alt="" />
      </div>
    </div>
  )
}
