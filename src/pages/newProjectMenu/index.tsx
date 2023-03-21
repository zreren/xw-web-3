import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import styles from './index.module.css';
import Image from 'next/image';
import cs from 'classnames';
import Link from "next/link";
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import menuLight from '@/public/images/home/menuLight.png'
import router, { useRouter } from 'next/router';
import Advertisement from "@/components/Advertisement";
import FooterLocation from "@/components/FooterLocation";
import { Fade, Slide } from "react-awesome-reveal";

export default function ProjectMenu() {
  const { query } = useRouter();
  const [active, setActive] = useState(false)
  const [japonaisVisible, setJaponaisVisible] = useState(false)
  const [activeMenu, setActiveMenu] = useState(query.active ?? '')
  const { subMenu = '' } = query;
  const handleClickMenu =(menu: string) => {
    setActiveMenu(menu)
  }
  console.log('query', query);
  
  return (
    <div className={styles.projectMenu}>
      <div className={cs(
        (activeMenu === 'brand' || !activeMenu || activeMenu === 'design' || activeMenu === 'brochure')? styles.white : styles.black,
        styles.left
        )}>
        <div className={cs(active? styles.active : "", styles.headLeft)}>
          <div>
              <span className='md:text-5xl text-4xl font-bold'>E.</span>
              <span className='md:text-5xl text-4xl font-semibold tracking-wider'>design</span>
            <div className="md:text-3xl text-1xl font-semibold">小雯工作室</div>
            </div>
          <div className={styles.infos}>
          <Link href={"/contact"}>
              <span>Infos</span>
            </Link>
          </div>
        </div>
        <div className={styles.contentLeft}>
          <div className={cs(
            activeMenu === 'brand' ? styles.brandActive : "",
            activeMenu === 'design' ? styles.designActive : "",
            activeMenu === 'photo' ? styles.photoActive : "",
            activeMenu === 'brochure' ? styles.brochureActive : "",
            activeMenu === 'card' ? styles.cardActive : "",
            activeMenu === 'tampon' ? styles.tamponActive : "",
            activeMenu === 'etique' ? styles.etiqueActive : "",

            styles.menuContent,
            )}>
              <li onClick={() => handleClickMenu('brand')} className={activeMenu === 'brand' ? styles.active : undefined}>
                <div>BRANDING</div>
                <div>品牌形象规划</div>
              </li>
              <li onClick={() => handleClickMenu('design')} className={activeMenu === 'design' ? styles.active : undefined}>
                <div>MENU DESIGN</div>
                <div>菜单订制</div>
              </li>
              <li onClick={() => handleClickMenu('photo')} className={activeMenu === 'photo' ? styles.active : undefined}>
                <div>PHOTOGRAPHIE</div>
                <div>攝影</div>
              </li>
              <li onClick={() => handleClickMenu('brochure')} className={activeMenu === 'brochure' ? styles.active : undefined}>
                <div>FLYER/DÉPLIANT/BROCHURE</div>
                <div>广告纸/贡/册</div>
              </li>
              <li onClick={() => handleClickMenu('card')} className={activeMenu === 'card' ? styles.active : undefined}>
                <div>CARTE DE VISITE/FIDA LITE</div>
                <div>名片/优惠卡</div>
              </li>
              <li onClick={() => handleClickMenu('tampon')} className={activeMenu === 'tampon' ? styles.active : undefined}>
                <div>TAMPON</div>
                <div>公司/优惠卡印章</div>
              </li>
              <li onClick={() => handleClickMenu('etique')} className={activeMenu === 'etique' ? styles.active : undefined}>
              <div>Etiquettes adhesives</div>
              <div>貼紙</div>
              </li>
              <li onClick={() => handleClickMenu('etique')} className={activeMenu === 'etique' ? styles.active : undefined}>
              </li>
              </div>
        </div>
      </div>
      <div className={cs(
        active? styles.active : "",
        styles.right,
        (activeMenu === 'brand' || !activeMenu)? styles.white : styles.black,
        )}>
        <div className={styles.headRight}>
        {(activeMenu === 'brand' || !activeMenu) ?<Image className="bg-white" src={navigationlogo} alt="navlogo" />
        : <Image src={menuLight} alt="navlogo"/>}
        </div>
        {/* 菜单定制 */}
        {activeMenu === 'design' && (<div className="w-full h-full flex justify-center items-start">
          <div className="flex flex-col md:text-[32px] text-[20px] font-bold mt-12">
            <Link className="hover:text-blue-600 cursor-pointer" href={'/projectMenu/japonais'}>Japonais 日餐</Link>
            <Link className="hover:text-blue-600" href={'/projectMenu/chinois'}>Chinois 中餐</Link>
            <Link className="hover:text-blue-600" href={'/projectMenu/thailandais'}>Thailandais 泰餐</Link>
            <Link className="hover:text-blue-600" href={'/projectMenu/vietnamien'}>Vietnamien 越餐</Link>
            <Link className="hover:text-blue-600" href={'/projectMenu/coreen'}>Coreen 韩餐</Link>
            <Link className="hover:text-blue-600" href={'/projectMenu/bar'}>BAR 酒吧</Link>
          </div>
        </div>)}
        {/* 广告页 */}
        {activeMenu === 'brochure' && (
          <div className="mx-12 mt-24">
            <Advertisement currentMenu={subMenu as string} onHandleChangeScreen={() => setActive(pre => !pre)} viewImage={active} />
          </div>
          )}
      </div>

      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full z-[50]">
        <FooterLocation
          leftClassname={(activeMenu === 'brand' || !activeMenu || activeMenu === 'design' || activeMenu === 'brochure')? "text-black" : "text-white"}
          rightClassname={(activeMenu === '' || activeMenu === 'brand') ? "text-black" : "text-white"} />
      </div>
    </div>
  )
}