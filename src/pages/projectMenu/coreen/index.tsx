import React from "react";
import Link from "next/link";
import styles from './index.module.css';
import cs from 'classnames';
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
          <Link href={"/projectMenu/coreen/coreen1"}>
            <img src={coreen1.src} alt="" />
          </Link>
        </div>
        <div className={cs('ml-12', styles.contentItem)}>
        <Link href={"/projectMenu/coreen/coreen2"}>
          <img src={coreen2.src} alt="" />
          </Link>
        </div>
        <div className="opacity-0">
        <img src={coreen1.src} alt="" />
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 px-2 md:mb-4 mb-0 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}