import React, { useState } from "react";
import { NextPage } from "next";
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image'
import depliant1 from '@/public/images/depliant/depliant-1.png';
import menuLight from '@/public/images/home/menuLight.png'
import Navigation  from "@/components/Navigation";
import styles from "./index.module.css";
import FooterLocation from "@/components/FooterLocation";
import { Fade } from "react-awesome-reveal";


const Flyer: NextPage<{}> = () => {
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
            <Link href='/contact' className='md:text-[42px] text-2xl  ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={toogleNavigation}>
          <Image className="bg-black bg-blend-screen" src={menuLight} alt="navlogo" />
        </div>
      </nav>
      <Link href={"/"}>
       <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-white'>小雯工作室</div>
      </Link>

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.menu}>
            <div>
            <li className="mb-4 font-bold text-blue-600">
              <span>Flyer</span>
              <span className="md:text-4xl text-xl">广告纸</span>
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
              <Link href={"/projectMenu?active=brochure&subMenu=depliant"}>
              <li className="my-4">
                <span>Depliant</span>
                <span>折纸</span>
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
        </div>
        <div className={styles.contentRight}>
          
        </div>
      </div>

    </Fade>
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation hidden="right" leftLocation="/projectMenu?active=brochure&subMenu=flyer" />
      </div>
    </div>
  )
}

export default Flyer;