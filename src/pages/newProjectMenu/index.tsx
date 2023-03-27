import React, { useRef, useState, useCallback } from "react";
import { animated, useTransition } from "react-spring";
import styles from './index.module.css';
import Image from 'next/image';
import cs from 'classnames';
import Link from "next/link";
import Card from "@/components/Card";
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import menuLight from '@/public/images/home/menuLight.png'
import router, { useRouter } from 'next/router';
import Navigation from "@/components/Navigation";
import tamponBackground from '@/public/images/tampon.png'
import Advertisement, { AdvertisementRef } from "@/components/Advertisement";
import FooterLocation from "@/components/FooterLocation";
import etique1 from '@/public/images/etique/Etiquettes1.png'
import etique2 from '@/public/images/etique/Etiquettes2.png'
import etique3 from '@/public/images/etique/Etiquettes3.png'
import etique4 from '@/public/images/etique/Etiquettes4.png'
import etique5 from '@/public/images/etique/Etiquettes5.png'
import cardImg1 from '@/public/images/cardImg/card1.png';
import cardImg2 from '@/public/images/cardImg/card2.png';
import cardImg3 from '@/public/images/cardImg/card3.png';
import cardImg4 from '@/public/images/cardImg/card4.png';
import cardImg5 from '@/public/images/cardImg/card5.png';
import cardImg6 from '@/public/images/cardImg/card6.png';
import cardImg7 from '@/public/images/cardImg/card7.png';
import photoBackImage1 from '@/public/images/photo/photoBackImage1.png';
import photoBackImage2 from '@/public/images/photo/photoBackImage2.png';
import photoBackImage3 from '@/public/images/photo/photoBackImage3.png';
import photoBackImage4 from '@/public/images/photo/photoBackImage4.png';
import photoBackImage5 from '@/public/images/photo/photoBackImage5.png';
import photoBackImage6 from '@/public/images/photo/photoBackImage6.png';
import { Fade, Slide } from "react-awesome-reveal";

const etiqueImageArr = [etique1, etique2, etique3, etique4, etique5]
const photoBackImageArrs = [photoBackImage1, photoBackImage2, photoBackImage3, photoBackImage4, photoBackImage5, photoBackImage6];
const cardImgArrs = [null, cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6, cardImg7]

export default function ProjectMenu() {
  const { query } = useRouter();
  const [active, setActive] = useState(false)
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);
  const [photoImgIdx, setPhotoImgIdx] = useState<number>(0);
  const [etiqueImgIdx, setEtiqueImgIdx] = useState<number>(0);
  const [cardImgIndex, setCardImgIndex] = useState<number>(0);
  const [cardMenuVisible, setCardMenuVisible] = useState<boolean>(true);
  // const [cardImageVisible, setCardImageVisible] = useState<Record<string, boolean>>({
  //   cardImage1: false,
  //   cardImage2: false,
  //   cardImage3: false,
  //   cardImage4: false,
  //   cardImage5: false,
  //   cardImage6: false,
  // });
  const [cardImageVisible, setCardImageVisible] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState(query.active ?? '')
  const ref = useRef<AdvertisementRef>(null);

  const handleClickMenu =(menu: string) => {
    setActiveMenu(menu)
    setPhotoImgIdx(0)
  }

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }

  const handleClickPhotoImage = () => {
    setPhotoImgIdx(pre => {
      return pre + 1 === 6 ? 0 : pre + 1 
    })
  }

  const handleClickEtiqueImage = () => {
    setEtiqueImgIdx(pre => {
      return pre + 1 === 5 ? 0 : pre + 1 
    })
  }

  const goLeft = () => {
    if(active) {
      setActive(false)
    } else {
      router.push({
        pathname: '/',
      })
    }
  }

  // card 整体切换动画
  const cardMenuTransitions = useTransition(cardMenuVisible, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
    // config: config.slow
  });

  const cardImgTransitions = useTransition(cardImageVisible, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(50%)" },
    // config: config.slow
  });

  // 摄影
  const photoImgTransitions = useTransition(photoImgIdx, {
    key: photoImgIdx,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 2000 },
  })

  // 贴纸
  const etiqueImgTransitions = useTransition(etiqueImgIdx, {
    key: etiqueImgIdx,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 2000 },
  })

  const clickImage = (num: number) => {
    setCardImgIndex(num)
    setCardImageVisible(true)
    setCardMenuVisible(false)
  }

  const handleChangeScreen = useCallback(() => {
    if (active) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [active])

  const clickImageRestore = () => {
    // closeCardImageAndOpenCardMenu()
    setCardImageVisible(false)
    setCardImgIndex(0)
    setCardMenuVisible(true)
  }

  const leftClassname = activeMenu === 'tampon' || activeMenu === 'photo' || activeMenu === 'card' || activeMenu === 'etique' ?
                    "text-white" : activeMenu === 'brochure' && active? "text-white" : "text-black"
  
  
  return (
    <>
    <div className={cs(
        styles.projectMenu,
        active && ref.current?.activeMenu === 'depliant' ? styles.moreHeight : null
      )}>
      {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
      <div className={cs(
        (activeMenu === 'brand' || !activeMenu || activeMenu === 'design' || activeMenu === 'brochure')? styles.white : styles.black,
        styles.left
        )}>
        <div className={cs(active? styles.active : "", styles.headLeft)}>
          <div>
              <Link href={"/"}><span className='md:text-5xl text-4xl font-bold'>E.</span></Link>
              <Link href={"/"}><span className='md:text-5xl text-4xl font-semibold tracking-wider'>design</span></Link>
              <Link href={"/"}><div className="md:text-3xl text-1xl font-semibold">小雯工作室</div></Link>
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
        <div className={styles.headRight} onClick={toogleNavigation}>
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
        {/* 摄影 */}
        {activeMenu === 'photo' && 
          photoImgTransitions((style, i) => (
            <animated.img
              src={photoBackImageArrs[photoImgIdx].src}
              className="absolute"
              style={{
                ...style,
              }}
              onClick={handleClickPhotoImage}
            >
            </animated.img>
          ))}
        {/* 广告页 */}
        {activeMenu === 'brochure' && (
          <div className="mx-12 mt-24">
            <Advertisement ref={ref} onHandleChangeScreen={handleChangeScreen} viewImage={active} />
          </div>
          )}

            {/* 名片/优惠卡 */}
            {activeMenu === 'card' && (
              <div>
                {cardMenuTransitions(
                  (style, item) =>
                    item && (
                      <animated.div
                      style={{
                        ...style
                      }}
                      >
                        <div>
                          <Card handClickImage={(num) => clickImage(num)} />
                        </div>
                      </animated.div>
                    )
                )}
                {cardImgTransitions(
                 (style, item) =>
                 item && cardImgArrs[cardImgIndex] && (
                   <animated.img
                   onClick={clickImageRestore}
                   src={cardImgArrs[cardImgIndex]?.src}
                   style={{
                     ...style,
                     position: "absolute",
                     top: '4rem',
                     right: '3rem',
                     cursor: 'pointer'
                   }}
                   >
                   </animated.img>
                 )
               )}
              </div>
            )}

          {/* 印章 tampon */}
          {activeMenu === 'tampon' && <Image src={tamponBackground} alt="" />}
      
          {/* 贴纸 etique */}
          {activeMenu === 'etique' && (
             etiqueImgTransitions((style, i) => (
              <animated.img
                src={etiqueImageArr[etiqueImgIdx].src}
                className="absolute"
                style={{
                  ...style,
                }}
                onClick={handleClickEtiqueImage}
              >
              </animated.img>
            ))
          )}
      </div>
      
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full z-[40]">
        <FooterLocation
          handleLeftCallback={goLeft}
          leftClassname={leftClassname}
          rightClassname={(activeMenu === '' || activeMenu === 'brand') ? "text-black" : "text-white"} />
      </div>
    </div>
    {activeMenu === 'photo' && photoImgIdx === 0 && (
      <div className={styles.photoImageOtherOrigin}>
        <div className="flex justify-evenly w-full md:h-[300px] h-full md:flex-row flex-col ">
              <div className="md:text-[32px] text-[20px] font-bold">
                <div className="cursor-pointer hover:text-blue-600"><Link href={"/projectMenu/japonais/culinaire"}>JAPONAISE</Link></div>
                <div className="hover:text-blue-600">CHINOISE</div>
                <div className="hover:text-blue-600">CORÉENNE</div>
                <div className="hover:text-blue-600">THAILANDAISE ET VIETNAMIENNE</div>
                <div className="hover:text-blue-600">BOISSONS/DESSERT</div>
              </div>
              <div className="md:text-7xl text-4xl font-bold">
                <div>Photographie</div>
                <div className="text-right">culinaire</div>
              </div>
        </div>
      </div>
    )}
    </>
  )
}