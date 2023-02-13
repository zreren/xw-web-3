import React, { useState } from "react";
import Link from 'next/link'
import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import styles from './index.module.css'
import Image from 'next/image'
import FooterLocation from "@/components/FooterLocation";
import personnalise from '@/public/images/personalise.png';
import cs from 'classnames';
import router from 'next/router';

const Personnalise: NextPage<{}> = () => {
  // const [imageVisible, setImageVisible] = useState<boolean>(true);
  const [menuVisibleObject, setMenuVisibleObject] = useState<Record<string, boolean>>({
    initVisible: true,
    workCloth: false,
    tablier: false,
  });

  const gotoPrixlogos = () => {
    router.push({
      pathname: '/prixlogos'
    })
  }

  const handleClickMenu = (menu: string) => {
    setMenuVisibleObject({
      workCloth: false,
      tablier: false,
      [menu]: true
    })
  }

  return (
    <div className={cs(
      styles.personnalise,
      menuVisibleObject.initVisible ?  '' : 'bg-white'
      )}>
        {menuVisibleObject.initVisible && <Image className="absolute h-full w-full z-0" src={personnalise} alt="" />}
      <div className="flex flex-col">
        <Navbar classname="bg-transparent px-12 z-10" />
        <div className={styles.content}>
          <div className="mt-4">
            <div className={cs(
              "md:text-2xl text-1xl text-blue-500",
              styles.linkContent
            )}>
              <div onClick={() => handleClickMenu('workCloth')} className={cs(styles.item, menuVisibleObject.workCloth ? styles.active : '')}>
                <p>Vètements de travail</p>
                <p>常规工作服</p>
              </div>
                {menuVisibleObject.workCloth && <ul className="md:text-[18px] text-[8px] text-black italic">
                  <li className="cursor-pointer"><span className="md:text-2xl text-blue-600 text-xl font-semibold">•&nbsp;</span><span>T-shirt</span></li>
                  <li className="cursor-pointer"><span className="md:text-2xl text-xl text-blue-600  font-semibold">•&nbsp;</span><span>Polo</span></li>
                  <li className="cursor-pointer"><span className="md:text-2xl text-xl text-blue-600  font-semibold">•&nbsp;</span><span>Sweatshirt</span></li>
                </ul>}
              <div onClick={() => handleClickMenu('tablier')} className={cs(
                "my-2",
                styles.item,
                menuVisibleObject.tablier ? styles.active : ''
              )}>
                <p>Tablier</p>
                <p>围裙</p>
              </div>
              {menuVisibleObject.tablier && <ul className="md:text-[18px] text-[8px] text-black italic">
                <li className="cursor-pointer"><span className="md:text-2xl text-blue-600 text-xl font-semibold">•&nbsp;</span><span>全身围裙</span></li>
                <li className="cursor-pointer"><span className="md:text-2xl text-blue-600 text-xl font-semibold">•&nbsp;</span><span>半身围裙</span></li>
              </ul>}
              <div className="">
                <p>vétements de travail de cuisine</p>
                <p>厨房工作服</p>
              </div>
              <div className="my-2">
                <p>Accessoires</p>
                <p>配饰</p>
              </div>
              <div onClick={gotoPrixlogos}>
                <p>Prix pour 'impression de logos</p>
                <p>印制 go价目装</p>
              </div>
            </div>
          </div>
          <div className="flex text-right flex-col md:mr-20 md:justify-center md:mt-48 md:text-5xl text-4xl font-bold">
            {menuVisibleObject.initVisible &&  <div>
              <p>VÊTEMENTS</p>
              <p className="md:my-8 my-4">PERSONNALISES</p>
              <p>工作服订制</p>
            </div>}
          </div>
        </div>
        
      </div>
      <div className="px-12 mb-4">
        <FooterLocation classname="z-10" />
      </div>
    </div>
  )
}

export default Personnalise;