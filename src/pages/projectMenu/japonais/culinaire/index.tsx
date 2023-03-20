import React, { useState } from "react";
import Link from 'next/link'
import { NextPage } from "next";
import menuLight from '@/public/images/home/menuLight.png'
import culinaire1 from '@/public/images/culinaire/culinaire-1.png';
import culinaire2 from '@/public/images/culinaire/culinaire-2.png';
import culinaire3 from '@/public/images/culinaire/culinaire-3.png';
import alcool1 from '@/public/images/culinaire/alcool-1.png';
import alcool2 from '@/public/images/culinaire/alcool-2.png';
import alcool3 from '@/public/images/culinaire/alcool-3.png';
import lamaison1 from '@/public/images/culinaire/lamaison-1.png';
import lamaison2 from '@/public/images/culinaire/lamaison-2.png';
import lamaison3 from '@/public/images/culinaire/lamaison-3.png';
import groupe1 from '@/public/images/culinaire/groupe-1.png';
import groupe2 from '@/public/images/culinaire/groupe-2.png';
import groupe3 from '@/public/images/culinaire/groupe-3.png';
import bento1 from '@/public/images/culinaire/bento-1.png';
import bento2 from '@/public/images/culinaire/bento-2.png';
import bento3 from '@/public/images/culinaire/bento-3.png';
import defu1 from '@/public/images/culinaire/defu-1.png';
import defu2 from '@/public/images/culinaire/defu-2.png';
import defu3 from '@/public/images/culinaire/defu-3.png';
import palais1 from '@/public/images/culinaire/palais-1.png';
import palais2 from '@/public/images/culinaire/palais-2.png';
import palais3 from '@/public/images/culinaire/palais-3.png';
import villepinte1 from '@/public/images/culinaire/villepinte1.png';
import villepinte2 from '@/public/images/culinaire/villepinte2.png';
import villepinte3 from '@/public/images/culinaire/villepinte3.png';
import Navigation from "@/components/Navigation";
import styles from './index.module.css';
import Image from "next/image";
import cs from 'classnames';
import FooterLocation from "@/components/FooterLocation";


const Culinaire: NextPage<{}> = () => {

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
    <div className={styles.main}>
      {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
        <div className="fixed w-full">
        <nav className={cs(
          styles.nav,
          "w-full flex flex-row items-center justify-between px-12 pt-4 relative"
        )}>
        <div className="flex flex-row items-center justify-between w-full">
            <div>
              <span className='md:text-5xl text-4xl font-bold'>E.</span>
              <span className='md:text-4xl text-4xl font-semibold tracking-wider	'>design</span>
              <Link href='/' className='md:text-[42px] text-2xl  ml-10 font-bold'>Infos</Link>
            </div>
            <div className="cursor-pointer" onClick={toogleNavigation}>
            <Image className="bg-black bg-blend-screen" src={menuLight} alt="navlogo" />
          </div>
          </div>
      </nav>
      <div className={styles.title}>小雯工作室</div>
    </div>

      <div className={styles.imgContent}>
          <div className="flex">
            <Image src={culinaire1} alt="" />
            <Image src={culinaire2} alt="" />
            <Image src={culinaire3} alt="" />
          </div>
          <div className="flex">
            <Image src={lamaison1} alt="" />
            <Image className="mx-8" src={lamaison2} alt="" />
            <Image src={lamaison3} alt="" />
          </div>
          <div className="flex">
            <Image src={groupe1} alt="" />
            <Image className="mx-8" src={groupe2} alt="" />
            <Image src={groupe3} alt="" />
          </div>

          <div className="flex">
            <Image src={bento1} alt="" />
            <Image className="mx-8" src={bento2} alt="" />
            <Image src={bento3} alt="" />
          </div>
          <div className="flex">
            <Image src={defu1} alt="" />
            <Image className="mx-8" src={defu2} alt="" />
            <Image src={defu3} alt="" />
          </div>
          <div className="flex">
            <Image src={alcool1} alt="" />
            <Image className="mx-8" src={alcool2} alt="" />
            <Image src={alcool3} alt="" />
          </div>
          <div className="flex">
            <Image src={palais1} alt="" />
            <Image className="mx-8" src={palais2} alt="" />
            <Image src={palais3} alt="" />
          </div>
          <div className="flex">
            <Image src={villepinte1} alt="" />
            <Image className="mx-8" src={villepinte2} alt="" />
            <Image src={villepinte3} alt="" />
          </div>
      </div>
  
      <div className={styles.textContent}>
        <div className="tracking-wider">Photographie</div>
        <div className="tracking-wider my-4">culinaire</div>
        <div className="tracking-wider text-blue-500 text-6xl">JAPONAISE</div>
      </div>

      <div className="fixed bottom-0 md:px-10 mb-4 w-full">
        <FooterLocation leftLocation={"/projectMenu?active=photo"} />
      </div>
    </div> 
  )
}

export default Culinaire;