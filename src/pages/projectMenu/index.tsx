import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import styles from './index.module.css';
import Image from 'next/image';
import cs from 'classnames';
import Link from "next/link";
import router, { useRouter } from 'next/router';
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import menuLight from '@/public/images/home/menuLight.png'
import tamponBackground from '@/public/images/tampon.png'
import etique1 from '@/public/images/etique/Etiquettes1.png'
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
import Advertisement from "@/components/Advertisement";
import Card from "@/components/Card";
import { Fade } from "react-awesome-reveal";


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
          <Image className="bg-blend-screen" src={menuLight} alt="navlogo" />
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


const images = [
  ({ classname }: { classname?: string }) => <img className={classname} src={photoBackImage1.src} alt="" />,
  ({ classname }: { classname?: string }) => <img className={classname} src={photoBackImage2.src} alt="" />,
  ({ classname }: { classname?: string }) => <img className={classname} src={photoBackImage3.src} alt="" />,
  ({ classname }: { classname?: string }) => <img className={classname} src={photoBackImage4.src} alt="" />,
  ({ classname }: { classname?: string }) => <img className={classname} src={photoBackImage5.src} alt="" />,
  ({ classname }: { classname?: string }) => <img className={classname} src={photoBackImage6.src} alt="" />,
]

export default function ProjectMenu() {
  const { query } = useRouter();
  const [activeMenu, setActiveMenu] = useState<string>('');
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);
  const [cardMenuVisible, setCardMenuVisible] = useState<boolean>(true);
  const [photoBackground, setPhotoBackground] = useState<string>('');
  const [cardImageVisible, setCardImageVisible] = useState<Record<string, boolean>>({
    cardImage1: false,
    cardImage2: false,
    cardImage3: false,
    cardImage4: false,
    cardImage5: false,
    cardImage6: false,
  });
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [photoImgIdx, setPhotoImgIdx] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<Record<string, any>>({
    headLeft: 'bg-gray-50',
    headRight: 'bg-gray-50',
    contentLeft: 'bg-gray-50',
    contentRight: 'bg-gray-50',
  })
  const [textColor, setTextColor] = useState<string>('text-black')
  const [textColor2, setText2Color] = useState<string>('text-black')
  const { subMenu = '' } = query;

  // 摄影图片切换动画
  const imgTransitions = useTransition(photoImgIdx, {
    key: photoImgIdx,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 2000 },
  })
  
  // card 整体切换动画
  const cardMenuTransitions = useTransition(cardMenuVisible, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
    // config: config.slow
  });


  const cardImgTransitions = useTransition(imgIndex, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(50%)" },
    // config: config.slow
  });

  const cardImgOtherTransitions = useTransition(imgIndex, {
    from: { opacity: 0, transform: "translate(100%, 100%)" },
    enter: { opacity: 1, transform: "translate(0px 0px)" },
    leave: { opacity: 0, transform: "translateX(50%, 50%)" },
    // config: config.slow
  });

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }

  const clickImage = (num: number) => {
    setCardImageVisible(pre => {
      const res = Object.fromEntries(Object.entries(pre).map(item => ([item[0], false])))
      return {
        ...res,
        [`cardImage${num}`]: true,
      }
    })
    setImgIndex(num)
    setCardMenuVisible(false)
  }

  const closeCardImageAndOpenCardMenu = () => {
    setCardImageVisible(pre => {
      const res = Object.fromEntries(Object.entries(pre).map(item => ([item[0], false])))
      return {
        ...res,
      }
    })
    setCardMenuVisible(true)
  }

  const clickImageRestore = () => {
    closeCardImageAndOpenCardMenu()
    setImgIndex(0)
    setCardMenuVisible(true)
  }

  useEffect(() => {
    const { active = '' } = query;
    handleClickMenu(active as string);
  }, [])
  
  const handleClickMenu = (menu: string):void => {
    if(menu === 'photo') {
      setTimeout(() => {
        setActiveMenu(menu);
      }, 300)
    } else {
      setActiveMenu(menu);
    }
    setPhotoImgIdx(0)
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
      setPhotoBackground('')
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
      setPhotoBackground('')
    } else if (menu === 'card') {
      setBackgroundColor(pre => ({
        ...pre,
        headLeft: 'bg-black',
        headRight: 'bg-black',
        contentLeft: 'bg-black',
        contentRight: 'bg-black',
      }))
      setText2Color('text-white')
      setTextColor('text-white')
      setPhotoBackground('')
    } else if (menu === 'photo' ) {
      setBackgroundColor(pre => ({
        ...pre,
        headLeft: 'bg-black',
        headRight: 'bg-black',
        contentLeft: 'bg-black',
        contentRight: 'transparent',
      }))
      setText2Color('text-white')
      setTextColor('text-white')
      setPhotoBackground('bg-[url(/images/photo/photoBackImage1.png)] bg-center')
    } else if(menu === 'tampon' || menu === 'etique') {
      setBackgroundColor(pre => ({
        ...pre,
        headLeft: 'bg-black',
        headRight: 'bg-black',
        contentLeft: 'bg-black',
        contentRight: 'bg-black',
      }))
      setText2Color('text-white')
      setTextColor('text-white')
      setPhotoBackground('')
    }
    closeCardImageAndOpenCardMenu()
  }
  
  const rightIcon = '>'
  const leftIcon = '<'

  const handleClickPhotoImage = () => {
    if(activeMenu !== 'photo') return;
    setPhotoImgIdx(pre => {
      return pre + 1 === 6 ? 0 : pre + 1 
    })
  }

  const MyImage = images[photoImgIdx]
  
  return (
    <div
      className={styles.projectMenu}
    >
    {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
      <div className={cs(
        'bg-blend-lighten',
        styles.head,
      )}> 
        <div
          className={cs(
          `flex flex-row w-5/12  ${textColor} ${backgroundColor.headLeft}`,
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
          styles.headRight
        )}>
          <div className="h-full flex justify-end items-center pr-12" onClick={toogleNavigation}>
            {activeMenu === 'brand' ?
              <Image className="bg-white" src={navigationlogo} alt="navlogo" />
              :
              <Image src={menuLight} alt="navlogo" />
            }
          </div>
        </div>
      </div>
      {/* Content */}
      <div
        className={styles.other}>
        <div
          className={cs(
            `${backgroundColor.contentLeft}`,
            styles.content
            )}>
            {activeMenu === 'photo' && 
            imgTransitions((style, i) => (
              <animated.div
                className="absolute w-[1000px] right-0 cursor-pointer"
                style={{
                  ...style,
                  // transition: 'all 0.5s',
                }}
              >
                <MyImage />
              </animated.div>
            ))
            }
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
              <li onClick={() => handleClickMenu('etique')} className={activeMenu === 'etique' ? styles.active : undefined}>
              <div>Etiquettes adhesives</div>
              <div>貼紙</div>
              </li>
              </div>
            </ul>
          <div onClick={handleClickPhotoImage} className={cs(
            `${backgroundColor.contentRight} ${textColor2} relative`,
            styles.imageOrigin
          )}>
            <div className={styles.contentRight}>
            {activeMenu === 'brand' && (
              <div>

              </div>
            )}
            {activeMenu === 'design' && (
              <div className="w-full h-full flex justify-center items-start">
                <div className="flex flex-col md:text-[32px] text-[20px] font-bold">
                  <Link className="hover:text-blue-600" href={'/projectMenu/japonais'}>Japonais 日餐</Link>
                  <Link className="hover:text-blue-600" href={'/projectMenu/chinois'}>Chinois 中餐</Link>
                  <Link className="hover:text-blue-600" href={'/projectMenu/thailandais'}>Thailandais 泰餐</Link>
                  <Link className="hover:text-blue-600" href={'/projectMenu/vietnamien'}>Vietnamien 越餐</Link>
                  <Link className="hover:text-blue-600" href={'/projectMenu/coreen'}>Coreen 韩餐</Link>
                  <Link className="hover:text-blue-600" href={'/projectMenu/bar'}>BAR 酒吧</Link>
                </div>
              </div>
            )}
            {activeMenu === 'brochure' && (
              <Advertisement currentMenu={subMenu as string} />
            )}
            {activeMenu === 'card' && (
              <>
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
              </div>
               </>
            )}
            {cardImageVisible.cardImage1 && <div onClick={clickImageRestore}>
               {cardImgTransitions(
                 (style, item) =>
                 item && (
                   <animated.img
                   src={cardImg1.src}
                   style={{
                     ...style,
                    position: "absolute",
                    top: 0,
                    right: '3rem',
                    cursor: 'pointer'
                   }}
                   >
                   </animated.img>
                 )
               )}
            </div>}
            {cardImageVisible.cardImage2 && <div onClick={clickImageRestore}>
            {cardImgOtherTransitions(
              (style, item) =>
              item && (
                <animated.img
                src={cardImg2.src}
                style={{
                  ...style,
                position: "absolute",
                top: 0,
                // right: '3rem',
                cursor: 'pointer'
                }}
                >
                </animated.img>
              )
            )}
            </div>}
            {cardImageVisible.cardImage3 && <div onClick={clickImageRestore}>
            {cardImgOtherTransitions(
              (style, item) =>
              item && (
                <animated.img
                src={cardImg3.src}
                style={{
                  ...style,
                position: "absolute",
                top: 0,
                right: '3rem',
                cursor: 'pointer'
                }}
                >
                </animated.img>
              )
            )}
            </div>}
            {cardImageVisible.cardImage4 && <div onClick={clickImageRestore}>
            {cardImgOtherTransitions(
              (style, item) =>
              item && (
                <animated.img
                src={cardImg4.src}
                style={{
                  ...style,
                position: "absolute",
                top: 0,
                right: '5rem',
                cursor: 'pointer'
                }}
                >
                </animated.img>
              )
            )}
            </div>}
            {cardImageVisible.cardImage5 && <div onClick={clickImageRestore}>
            {cardImgOtherTransitions(
              (style, item) =>
              item && (
                <animated.img
                src={cardImg5.src}
                style={{
                  ...style,
                position: "absolute",
                top: 0,
                right: '5rem',
                cursor: 'pointer'
                }}
                >
                </animated.img>
              )
            )}
            </div>}
            {cardImageVisible.cardImage6 && <div onClick={clickImageRestore}>
            {cardImgOtherTransitions(
              (style, item) =>
              item && (
                <animated.img
                src={cardImg6.src}
                style={{
                  ...style,
                position: "absolute",
                top: 0,
                right: '5rem',
                cursor: 'pointer'
                }}
                >
                </animated.img>
              )
            )}
            </div>}
            {cardImageVisible.cardImage7 && <div onClick={clickImageRestore}>
            {cardImgOtherTransitions(
              (style, item) =>
              item && (
                <animated.img
                src={cardImg7.src}
                style={{
                  ...style,
                position: "absolute",
                top: 0,
                right: '5rem',
                cursor: 'pointer'
                }}
                >
                </animated.img>
              )
            )}
            </div>}
            {activeMenu === 'tampon' && (
              <div className={styles.tamponBox}>
                <Image src={tamponBackground} alt="" />
              </div>
            )}
            {activeMenu === 'etique' && (
             <div className={styles.tamponBox}>
              <Image src={etique1} alt="" />
            </div>
            )}
              <div className={styles.bottomRight}>
                <div className={styles.bottomLeft} onClick={() => router.push('/project')}>
                  <span>RETOUR</span>
                  <span>{leftIcon}</span>
                </div>
                <div className="md:text-[14px] text-[8px] mt-8">
                © 2022-2023 E.des/gn
                </div>
                <div className={styles.noncontacter} onClick={() => router.push('/contact')}>
                  <span>{rightIcon}</span>
                  <span>NOUS&nbsp;&nbsp;CONTACTER</span>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      {activeMenu === 'photo' && photoImgIdx === 0 && <div className="bg-black text-white h-screen flex items-center px-12">
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
      </div>}
      </div>
    </div>
  )
}
