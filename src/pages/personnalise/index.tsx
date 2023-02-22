import React, { useState } from "react";
import Link from 'next/link'
import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import styles from './index.module.css'
import Image from 'next/image'
import FooterLocation from "@/components/FooterLocation";
import TshirtComponent from "@/components/TshirtComponent";
import personnalise from '@/public/images/personalise.png';
import workClothImg from '@/public/images/personnalise/workCloth.png';
import cs from 'classnames';
import { isBoolean } from 'lodash-es';
import router from 'next/router';
import PoloComponent from "@/components/PoloComponent";
import SweatshirtComponent from "@/components/SwearShirtComponent";
import Tablier from "@/components/Tablier";
import HalfTablier from "@/components/Tablier/HalfTablier";
import CompleteTablier from "@/components/Tablier/CompleteTablier";
import KitchenCloth from "@/components/kitchenCloth";
import AccessoiresComponent from "@/components/Accessoires";
import WorkCloth from "@/components/WorkCloth";

const Personnalise: NextPage<{}> = () => {
  const [menuVisibleObject, setMenuVisibleObject] = useState<Record<string, any>>({
    initVisible: true,
    workCloth: false,
    tablier: false,
    kitchenCloth: false,
  });

  const gotoPrixlogos = () => {
    router.push({
      pathname: '/prixlogos'
    })
  }

  const handleClickMenu = (menu: string, submenu:string) => {
    if (!submenu) {
      setMenuVisibleObject({
        initVisible: false,
        workCloth: false,
        tablier: false,
        kitchenCloth: false,
        [menu]: true
      })
    } else {
      setMenuVisibleObject({
        initVisible: false,
        workCloth: false,
        tablier: false,
        kitchenCloth: false,
        [menu]: {
          [submenu]: true
        }
      })
    }
  }

  console.log('menuVisibleObject.tablier', menuVisibleObject)

  return (
    <div
      className={cs(
      styles.personnalise,
      menuVisibleObject.initVisible ?  '' : 'bg-white'
      )}>
        {menuVisibleObject.initVisible && <div className="absolute bg-cover  w-full h-screen  bg-no-repeat cover bg-[url(/images/personalise.png)]"></div>}
      <div className="flex flex-col">
        <Navbar classname="bg-transparent px-12 z-10" />
        <div className={styles.content}>
          <div className="mt-4">
            <div className={cs(
              "md:text-2xl text-1xl text-blue-500",
              styles.linkContent
            )}>
              <div onClick={() => handleClickMenu('workCloth', '')} className={cs(styles.item, menuVisibleObject.workCloth ? styles.active : '')}>
                <p>Vètements de travail</p>
                <p className="text-[20px]">常规工作服</p>
              </div>
                {menuVisibleObject.workCloth && <ul className="md:text-[18px] text-[8px] text-black italic">
                  <li className={cs(
                    "cursor-pointer",
                    menuVisibleObject.workCloth.tshirtContent ? styles.activeSubMenu : ""
                  )} onClick={() => handleClickMenu('workCloth', 'tshirtContent')}>
                    <span className={cs(
                      "md:text-2xl text-blue-600 text-xl font-semibold")}>•&nbsp;</span>
                      <span>T-shirt</span>
                    </li>
                  <li
                    className={cs(
                      "cursor-pointer",
                      menuVisibleObject.workCloth.poloContent ? styles.activeSubMenu : ""
                    )} 
                    onClick={() => handleClickMenu('workCloth', 'poloContent')}><span className="md:text-2xl text-xl text-blue-600  font-semibold">•&nbsp;</span><span>Polo</span></li>
                  <li
                    className={cs(
                      "cursor-pointer",
                      menuVisibleObject.workCloth.sweatshirtContent ? styles.activeSubMenu : ""
                    )} 
                    onClick={() => handleClickMenu('workCloth', 'sweatshirtContent')}><span className="md:text-2xl text-xl text-blue-600  font-semibold">•&nbsp;</span><span>Sweatshirt</span></li>
                </ul>}
              <div onClick={() => handleClickMenu('tablier', '')} className={cs(
                "my-2",
                styles.item,
                menuVisibleObject.tablier ? styles.active : ''
              )}>
                <p>Tablier</p>
                <p className="text-[20px]">围裙</p>
              </div>
              {menuVisibleObject.tablier && <ul className="md:text-[18px] text-[8px] text-black italic">
                <li
                  className={cs(
                    "cursor-pointer",
                    menuVisibleObject.tablier.half ? styles.activeSubMenu : ""
                  )} 
                  onClick={() => handleClickMenu('tablier', 'half')}><span className="md:text-2xl text-blue-600 text-xl font-semibold">•&nbsp;</span><span>半身围裙</span></li>
                <li
                  className={cs(
                    "cursor-pointer",
                    menuVisibleObject.tablier.complete ? styles.activeSubMenu : ""
                  )} 
                  onClick={() => handleClickMenu('tablier', 'complete')}><span className="md:text-2xl text-blue-600 text-xl font-semibold">•&nbsp;</span><span>全身围裙</span></li>
              </ul>}
              <div onClick={() => handleClickMenu('kitchenCloth', '')} className={
                menuVisibleObject.kitchenCloth ? styles.active : ''
              }>
                <p>vétements de travail de cuisine</p>
                <p className="text-[20px]">厨房工作服</p>
              </div>
              <div onClick={() => handleClickMenu('accessories', '')} className="my-2">
                <p>Accessoires</p>
                <p className="text-[20px]">配饰</p>
              </div>
              <div onClick={gotoPrixlogos}>
                <p>Prix pour 'impression de logos</p>
                <p className="text-[20px]">印制 go价目装</p>
              </div>
            </div>
          </div>
          {menuVisibleObject.initVisible &&  <div className="flex text-right flex-col md:mr-20 md:justify-center md:mt-48 md:text-8xl text-4xl font-semibold">
            <div>
              <p>VÊTEMENTS</p>
              <p className="md:my-8 my-4">PERSONNALISES</p>
              <p className="md:text-5xl text-4xl ">工作服订制</p>
            </div>
          </div>}
              {/* 工作服部分 */}
            {menuVisibleObject.workCloth && isBoolean(menuVisibleObject.workCloth) && <div className={styles.workCloth}>
              {/* <Image className={styles.workCloth} src={workClothImg} alt="" /> */}
              <WorkCloth />
            </div>}
          {
            menuVisibleObject.workCloth.tshirtContent && (
              <TshirtComponent />
            )
          }
          {
            menuVisibleObject.workCloth.poloContent &&
            <PoloComponent />
          }
          {
            menuVisibleObject.workCloth.sweatshirtContent  && 
            <SweatshirtComponent />
          }
          {/* 围裙部分 */}
          {menuVisibleObject.tablier && isBoolean(menuVisibleObject.tablier) && <div className={styles.tablier}>
            <Tablier />
          </div>}
          {menuVisibleObject.tablier.half &&
            <HalfTablier />}
          {menuVisibleObject.tablier.complete && (
            <CompleteTablier />
          )}

          {/* 厨房服装部分  */}
          {menuVisibleObject.kitchenCloth && isBoolean(menuVisibleObject.kitchenCloth) && <div className={styles.tablier}>
            <KitchenCloth />
          </div>}

            {/* 配饰部分 */}
          {menuVisibleObject.accessories && isBoolean(menuVisibleObject.accessories) && <div className={styles.tablier}>
            <AccessoiresComponent />
          </div>}
        </div>
      </div>
      <div className="px-12 md:mb-4 mb-1">
        <FooterLocation classname="z-10" />
      </div>
    </div>
  )
}

export default Personnalise;