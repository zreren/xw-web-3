import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import Image from 'next/image';
import cs from 'classnames';
import Link from "next/link";
import { useRouter } from 'next/router';
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import FooterLocation from "@/components/FooterLocation";


interface NavigationProps {
  handleCloseNavigation: () => void
}


const Navigation:React.FC<NavigationProps> = (props) => {
  const { handleCloseNavigation } = props;

  const closeNavigation = () => {
    handleCloseNavigation()
  }

  return (
  <div className={styles.navigation}>
      <div className="h-full">
      <nav className={cs(
        styles.nav,
      )}>
       <div className="flex flex-row items-center justify-between w-full">
          <div>
            <span className='md:text-5xl text-4xl font-bold'>E.</span>
            <span className='md:text-4xl text-4xl font-semibold tracking-wider	'>design</span>
            <Link href='/contact' className='md:text-3xl text-2xl ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={closeNavigation}>
          <Image className="bg-white bg-blend-screen" src={navigationlogo} alt="navlogo" />
        </div>
        </div>
    </nav>

     <div className="h-full md:text-2xl text-1xl flex flex-col justify-between">
     <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-white'>小雯工作室</div>
      <div>
        <div className={cs(
          styles.item
        )}>
          <Link href="/project">PROJET</Link>
          <Link href="/project">作品</Link>
        </div>
        <div className={styles.item}>
          <Link href="/personnalise">VÈTEMENTS PERSONNALISÉS</Link>
          <Link href="/personnalise">工作服订制</Link>
        </div>
        <div className={styles.item}>
          <span>PROCESSUS</span>
          <span>合作流程</span>
        </div>
        <div className={styles.item}>
          <Link href="/contact">CONTACT</Link>
          <Link href="/contact">联系我们</Link>
        </div>
        <div className={styles.copyright}>
        © 2022-2023 E.des/gn
        </div>
        <div className="flex justify-center items-center py-4">
      </div>
      <div className="flex justify-center items-center">
        © 2022-2023 E.des/gn
      </div>
     </div>
     </div>
     </div>
    </div>
    )
}


export default function ProjectMenu() {
  const { query } = useRouter();
  const [activeMenu, setActiveMenu] = useState<string>('');
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<Record<string, any>>({
    headLeft: 'bg-gray-50',
    headRight: 'bg-gray-50',
    contentLeft: 'bg-gray-50',
    contentRight: 'bg-gray-50',
  })
  const [textColor, setTextColor] = useState<string>('text-black')
  const [textColor2, setText2Color] = useState<string>('text-black')

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }
  
  useEffect(() => {
    const { active = '' } = query;
    setActiveMenu(active as string);
  }, [])

  console.log('activeMenu', activeMenu, 'query', query);
  
  const handleClickMenu = (menu: string):void => {
    setActiveMenu(menu);
    if(menu === 'design' || menu === 'brochure') {
      setBackgroundColor(pre => ({
        ...pre,
        headLeft: 'bg-white',
        headRight: 'bg-black',
        contentLeft: 'bg-white',
        contentRight: 'bg-black',
      }));
      setTextColor('text-black');
      setText2Color('text-white')
    } else if(menu === 'brand') {
      setBackgroundColor(pre => ({
        ...pre,
        headLeft: 'bg-white',
        headRight: 'bg-white',
        contentLeft: 'bg-white',
        contentRight: 'bg-white',
      }))
      setTextColor('text-black')
      setText2Color('text-black')
    } else if (menu === 'photo' || menu === 'card') {
      setBackgroundColor(pre => ({
        ...pre,
        headLeft: 'bg-black',
        headRight: 'bg-black',
        contentLeft: 'bg-black',
        contentRight: 'bg-black',
      }))
      setText2Color('text-white')
      setTextColor('text-white')
    }
  }
  
  return (
    <div className={styles.projectMenu}>
    {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
      <div className={cs(
        'bg-blend-lighten',
        styles.head,
      )}> 
        <div
          className={cs(
          `flex flex-row w-2/6  ${textColor} ${backgroundColor.headLeft}`,
          styles.headLeft
        )}>
          <div className="px-12 pt-4">
            <div>
              <span className='md:text-5xl text-4xl font-bold'>E.</span>
              <span className='md:text-4xl text-4xl font-semibold tracking-wider'>design</span>
            </div>
            <div className="md:text-3xl text-1xl font-semibold">小雯工作室</div>
          </div>
          <div className={styles.infos}>
            <span>Infos</span>
          </div>
        </div>
        <div className={cs(
          `flex-1 ${backgroundColor.headRight}`,
        )}>
          <div className="h-full flex justify-end items-center pr-12" onClick={toogleNavigation}>
            <Image className="bg-white" src={navigationlogo} alt="navlogo" />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className={styles.other}>
        <div className={`flex-1 flex md:flex-row flex-col items-end ${backgroundColor.contentLeft}`}>
            <ul className={cs(
              `${textColor} `,
              styles.menu,
            )}>
              <div>
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
              <li>
              <div>Etiquettes adhesives</div>
              <div>貼紙</div>
              </li>
              </div>
            </ul>
          <div className={cs(
            `${backgroundColor.contentRight} ${textColor2}`,
            styles.imageOrigin
          )}>
            222
          </div>
        </div>
        <div className="md:px-12 px-1 md:mb-4 mb-1">
          <FooterLocation leftLocation="/project" />
        </div>
      </div>
    </div>
  )
}