import React from "react";
import styles from './index.module.css';
import Link from "next/link";
import bar1 from '@/public/images/bar/Bar-1.png'
import bar2 from '@/public/images/bar/Bar-2.png'
import bar3 from '@/public/images/bar/Bar-3.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Coreen() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
        <span>Bar</span>
        <div>酒吧</div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <Link href={"/projectMenu/bar/bar1"}>
            <img src={bar1.src} alt="" />
          </Link>
        </div>
        <div className={styles.contentItem}>
        <Link href={"/projectMenu/bar/bar2"}>
          <img src={bar2.src} alt="" />
          </Link>
        </div>
        <div style={{ position: 'relative' }} className={styles.contentItem}>
        <Link className="absolute bottom-0 w-full z-[10]" href={"/projectMenu/bar/bar3"}>
         <img src={bar3.src} alt="" />
        </Link>
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 md:mb-4 mb-0 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}