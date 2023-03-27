import React, { useState, useRef, useEffect, useCallback } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image'
import Navigation  from "@/components/Navigation";
import menuLight from '@/public/images/home/menuLight.png'
import flocage1 from '@/public/images/flocagePrice/flocage-1.png'
import flocage2 from '@/public/images/flocagePrice/flocage-2.png'
import flocage3 from '@/public/images/flocagePrice/flocage-3.png'
import flocage4 from '@/public/images/flocagePrice/flocage-4.png'
import styles from './index.module.css';
import FooterLocation from "@/components/FooterLocation";

const BroderiePrice: NextPage<{}> = () => {
  const [current, setCurrent] = useState<number>(0)
  const [topArr, setTopArr] = useState<number[]>([])
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }
  const router = useRouter();
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { top: top1 } =  ref1.current?.getBoundingClientRect() as DOMRect;
    const { top: top2 } =  ref2.current?.getBoundingClientRect() as DOMRect;
    const { top: top3 } =  ref3.current?.getBoundingClientRect() as DOMRect;
    const { top: top4 } =  ref4.current?.getBoundingClientRect() as DOMRect;
    const arr = [top1, top2, top3, top4];
    setTopArr(arr);
  }, [])

  const handClickNav = useCallback(() => {
    const next = current + 1 > 3 ? 0 : current + 1;
    window.scrollTo({ top: topArr[next], behavior: 'smooth' });
    setCurrent(next)
  }, [ref1, ref2, topArr, current])

  return (
    <div className={styles.flocagePrice}>
      {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
      <div className="fixed z-[50] w-full top-0 cursor-pointer">
      <nav className={styles.nav}>
          <div>
            <Link href="/">
              <span className='font-bold'>E.</span>
            </Link>
            <Link href="/">
              <span className='font-semibold tracking-wider'>design</span>
            </Link>
            <Link href='/contact' className='md:text-[42px] text-2xl ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={toogleNavigation}>
          <Image className="bg-black bg-blend-screen" src={menuLight} alt="navlogo" />
        </div>
      </nav>
      <Link href='/'>
        <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-white'>小雯工作室</div>
      </Link>
      <div className="flex justify-between px-12 text-blue-600 text-7xl font-bold tracking-wider" onClick={handClickNav}>
        <span>flocage</span>
        <span>印花</span>
      </div>
      </div>
      <div ref={ref1} className={styles.main}>
        <div className={styles.content}>
          <div className="mb-2 tracking-wider">胸口店名纯文字排版設計</div>
          <div className="text-rose-600">单色</div>
          <div className="mb-2">
            <span className="mr-8 italic">(coeur, texte, 1 couleur)</span>
            <span className="md:text-7xl text-2xl">1.</span>
          </div>
          <div className="tracking-wider">1件 10€-12€<span className="text-blue-600 font-extrabold mx-1">|</span>5件起3€/件<span className="text-blue-600 font-extrabold mx-1">|</span>20件起 2€/件</div>
        </div>
        <Image className="absolute w-1/2 left-1/4" src={flocage1} alt="" />
      </div>
      <div ref={ref2} className={styles.main}>
      <div className={styles.content}>
          <div className="mb-2 tracking-wider">胸口店名文字+LOGO图形</div>
          <div className="text-rose-600">单色/双色</div>
          <div className="mb-2">
            <span className="mr-8 italic">(coeur, texte, 1 couleur)</span>
            <span className="text-7xl">2.</span>
          </div>
          <div className="tracking-wider">1件 11€-15€<span className="text-blue-600 font-extrabold mx-1">|</span>5件起4-6€/件<span className="text-blue-600 font-extrabold mx-1">|</span>20件起 2.5€/件</div>
        </div>
        <Image className="absolute w-1/2 left-1/4" src={flocage2} alt="" />
      </div>
      <div ref={ref3} className={styles.main}>
      <div className={styles.content}>
          <div className="mb-2 tracking-wider">胸堂<span>或</span>后背(大) <span>纯文字排版设计</span></div>
          <div className="text-rose-600">单色/双色</div>
          <div className="mb-2">
            <span className="mr-8 italic">(coeur, texte, 1 couleur)</span>
            <span className="text-7xl">3.</span>
          </div>
          <div className="tracking-wider">1件 12€-18€<span className="text-blue-600 font-extrabold mx-1">|</span>5件起5-7€/件<span className="text-blue-600 font-extrabold mx-1">|</span>20件起 3-5€/件</div>
        </div>
        <Image className="absolute w-1/2 left-1/4" src={flocage3} alt="" />
      </div>
      <div ref={ref4} className={styles.main}>
      <div className={styles.content}>
          <div className="mb-2 tracking-wider">胸堂<span>或</span>后背(大) <span>店名文字+LOGO图形</span></div>
          <div className="text-rose-600">单色/双色</div>
          <div className="mb-2">
            <span className="mr-8 italic">(coeur, texte, 1 couleur)</span>
            <span className="text-7xl">4.</span>
          </div>
          <div className="tracking-wider">1件 14€-21€<span className="text-blue-600 font-extrabold mx-1">|</span>5件起6-8€/件<span className="text-blue-600 font-extrabold mx-1">|</span>20件起 4-6€/件</div>
        </div>
        <Image className="absolute w-1/2 left-1/4" src={flocage4} alt="" />
      </div>
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation leftLocation="/prixlogos?activeMenu=flocage" />
      </div>
    </div>
  )
}

export default BroderiePrice;