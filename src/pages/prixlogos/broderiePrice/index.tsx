import React from "react";
import { NextPage } from "next";
import Link from 'next/link';
import Image from 'next/image'
import menuLight from '@/public/images/home/menuLight.png'
import whiteT from '@/public/images/white2.png';
import broderie1 from '@/public/images/broderie-1.png';
import broderie2 from '@/public/images/broderie-2.png';
import styles from './index.module.css';
import FooterLocation from "@/components/FooterLocation";

const FlocagePrice: NextPage<{}> = () => {

  return (
    <div className={styles.flocagePrice}>
      <div className="fixed z-[50] w-full top-0 cursor-pointer">
      <nav className={styles.nav}>
          <div>
            <span className='font-bold'>E.</span>
            <span className='font-semibold tracking-wider'>design</span>
            <Link href='/' className='md:text-3xl text-2xl ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer">
          <Image className="bg-black bg-blend-screen" src={menuLight} alt="navlogo" />
        </div>
      </nav>
      <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-white'>小雯工作室</div>
      </div>
      <div className={styles.main}>
        <div className={styles.headText}>
          <span>Broderie</span>
          <span>刺绣</span>
        </div>
        <div className="overflow-scroll h-[240px] z-[100] mb-48">
        <div className={styles.contentOne}>
          <div className="relative">
            <div className="tracking-wider px-12 text-[24px]">胸口店名 <span className="underline decoration-1">纯文字排版设计</span></div>
            <div className="text-slate-450 px-12 mb-12">（最大宏度12cm)</div>
            <div className="mr-8 italic px-12 mb-4 flex flex-row">
              <div className="flex flex-col text-slate-450">
                <span>(coeut, toxte,)</span>
                <span>largour jusqu'à 12cm</span>
              </div>
              <span className="md:text-7xl text-2xl not-italic ml-4">1.</span>
            </div>
            <div className={styles.price}><span>1件 </span> 10€</div>
            <div className={styles.price}><span>5件起 </span> 5€/件</div>
            <div className={styles.price}><span>20件起 </span> 4€/件</div>
            <Image className="absolute right-48 bottom-16" src={broderie1} alt="" />
          </div>
          <div>
          </div>
        </div>
        <div className={styles.contentTwo}>
          <div className="relative">
            <div className="underline decoration-1 px-12 text-[24px]">胸口店名字+LOGO图形</div>
            <div className="text-slate-450 px-12">（最大宏度12cm）</div>
            <div className="mr-8 italic px-12 flex flex-row">
              <div className="flex flex-col text-slate-450">
                <span>(图形最大宽度14cm, </span>
                <span className="mb-6">图形制版费45€/份)</span>
                <span>(Programme 45€ par</span>
                <span>dessin jusqu'à 14cm</span>
                <span>pour la lère fois)</span>
              </div>
              
              <span className="md:text-7xl text-2xl not-italic ml-4">2.</span>
            </div>
            <div className={styles.price}>1件 10€</div>
            <div className={styles.price}>5件起 5€/件</div>
            <div className={styles.price}>20件起 4€/件</div>
            <Image className="absolute right-48 top-0 bottom-16"  src={broderie2} alt="" />
          </div>
          <div>
          </div>
        </div>
        </div>
        <Image className="z-[10] absolute bottom-0 -right-40" src={whiteT} alt="" /> 
      </div>
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full z-[50]">
        <FooterLocation leftLocation="/prixlogos" />
      </div>
    </div>
  )
}

export default FlocagePrice;