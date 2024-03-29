import React from "react";
import styles from './index.module.css';
import Link from 'next/link';
import chinois1 from '@/public/images/foods/chinois/chinois1.png'
import chinois2 from '@/public/images/foods/chinois/chinois2.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";
import { Fade, Slide } from "react-awesome-reveal";

export default function Japonais() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
      <Fade direction="up">
        <span>Chiois</span>
        <div>中餐</div>
        </Fade>
      </div>
      <div className={styles.content}>
      <Slide direction="right">
        <div className={styles.contentItem}>
          <Link href={"/projectMenu/chinois/chinois1"}>
          <img src={chinois2.src} alt="" />
          </Link>
        </div>
        <div style={{ position: 'relative' }} className={styles.contentItem}>
          <Link href={"/projectMenu/chinois/chinois2"}>
            <img src={chinois1.src} alt="" />
          </Link>
        </div>
        <div className="opacity-0">
          <img src={chinois2.src} alt="" />
        </div>
      </Slide>
      </div>
        <div className="fixed bottom-0 md:px-12 px-2 md:mb-4 mb-0 w-full">
        <FooterLocation leftLocation="/newProjectMenu?active=design" />
        </div>
    </div>
  )
}