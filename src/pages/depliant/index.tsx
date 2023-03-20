import React, { useState } from "react";
import { NextPage } from "next";
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image'
import depliant1 from '@/public/images/depliant/depliant-1.png';
import piles1 from '@/public/images/depliant/piles-1.png';
import piles2 from '@/public/images/depliant/piles-2.png';
import piles3 from '@/public/images/depliant/piles-3.png';
import piles4 from '@/public/images/depliant/piles-4.png';
import piles5 from '@/public/images/depliant/piles-5.png';
import menuLight from '@/public/images/home/menuLight.png'
import Navigation  from "@/components/Navigation";
import { Fade } from "react-awesome-reveal";
import styles from "./index.module.css";
import FooterLocation from "@/components/FooterLocation";

const DepliantOne: NextPage<{}> = () => {
  const { query, pathname } = useRouter();
  const { activeMenu = '', page } = query;
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }

  return (
    <div className={styles.depliant}>
      {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
      <Fade direction="right" triggerOnce>
       <nav className={styles.nav}>
       <div>
            <Link href={"/"}><span className='font-bold'>E.</span></Link>
            <Link href={"/"}>
              <span className='font-semibold tracking-wider'>design</span>
              </Link>
            <Link href='/' className='md:text-3xl text-2xl ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={toogleNavigation}>
          <Image className="bg-black bg-blend-screen" src={menuLight} alt="navlogo" />
        </div>
      </nav>
      <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-white'>小雯工作室</div>

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.menu}>
            <div>
            <li className="mb-4 font-bold text-blue-600">
              <span>Depliant</span>
              <span className="md:text-4xl text-xl">折纸</span>
            </li>
            <Image src={depliant1} alt="" />
            </div>
            
            <div>
              <Link href={"/projectMenu?active=brochure&subMenu=brochure"}>
              <li>
                <span>Brochure</span>
                <span>册子</span>
              </li>
              </Link>
              <Link href={"/projectMenu?active=brochure&subMenu=flyer"}>
              <li className="my-4">
                <span>Flyer</span>
                <span>广告纸</span>
              </li>
              </Link>
              <Link href={"/projectMenu?active=brochure&subMenu=affiche"}>
                <li>
                  <span>Affiche</span>
                  <span>海报</span>
                </li>
              </Link>
            </div>
            
          </div>
          <div className={styles.pilis}>
            <div className="">
              <Link className={activeMenu === 'two' ? styles.active : ''} href={`${pathname}?activeMenu=two`}><li> 
                <span> 2 plis</span><span>兩折頁</span>
                 </li></Link>
              <Link className={activeMenu === 'three' ? styles.active : ''} href={`${pathname}?activeMenu=three`}><li>  
                <span> 3 plis</span><span>三折頁</span>
                 </li></Link>
              <Link className={activeMenu === 'four' ? styles.active : ''} href={`${pathname}?activeMenu=four`}><li> 
              <span> 4 plis</span><span>四折頁</span>
                 </li></Link>
              {page === 'one' && <Link className={activeMenu === 'five' ? styles.active : ''} href={`${pathname}?activeMenu=five`}><li> 
                <span> 5 plis</span>
                <span>五折頁</span>
                 </li></Link>}
                 {page === 'one' && <Link className={activeMenu === 'six' ? styles.active : ''} href={`${pathname}?activeMenu=six`}><li> 
                <span> 6 plis</span>
                <span>六折頁</span>
                </li></Link>}
            </div>
            <div></div>
          </div>
        </div>
        <div className={styles.contentRight}>
          {activeMenu === 'two' && <Image src={piles1} alt="" />}
          {activeMenu === 'three' && <Image src={piles2} alt="" />}
          {activeMenu === 'four' && <Image src={piles3} alt="" />}
          {activeMenu === 'five' && <Image src={piles4} alt="" />}
          {activeMenu === 'six' && <Image src={piles5} alt="" />}
        </div>
      </div>

    </Fade>
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation hidden="right" leftLocation="/projectMenu?active=brochure&subMenu=depliant" />
      </div>
    </div>
  )
}

export default DepliantOne;