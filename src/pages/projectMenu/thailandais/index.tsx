import React from "react";
import styles from './index.module.css';
import Link from "next/link";
import thailandais1 from '@/public/images/foods/thailandais/thailandais1.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";
import { Fade, Slide } from "react-awesome-reveal";

export default function Thailandais() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
      <Fade direction="up">
        <span>Thaïlandais</span>
        <div>中餐</div>
        </Fade>
      </div>
      <div className={styles.content}>
      <Slide direction="right">
        <div className={styles.contentItem}>
          <Link href={'/projectMenu/thailandais/thailandais1'}>
            <img src={thailandais1.src} alt="" />
          </Link>
          
        </div>
        <div className="opacity-0">
          <img src={thailandais1.src} alt="" />
        </div>
        <div className="opacity-0">
          <img src={thailandais1.src} alt="" />
        </div>
        </Slide>
      </div>
        <div className="fixed bottom-0 md:px-12 md:mb-4 mb-0  px-2 w-full">
        <FooterLocation leftLocation="/newProjectMenu?active=design" />
        </div>
    </div>
  )
}