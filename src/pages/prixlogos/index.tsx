import React, { useState } from "react";
import { animated, useTransition, useSpring } from "react-spring";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from './index.module.css';
import Link from 'next/link'
import { Fade } from "react-awesome-reveal";
import { NextPage } from "next";
import FooterLocation from "@/components/FooterLocation";
import cs from 'classnames';
import whiteT from '@/public/images/whiteT.png';
import cixiuone from '@/public/images/prixlogos/cixiu-1.png'
import cixiutwo from '@/public/images/prixlogos/cixiu-2.png'
import printing from '@/public/images/prixlogos/printing.png'

const PrixLogos: NextPage<{}> = () => {
  const [activeMenu, setActiveMenu] = useState<string>('price');
  const [imageObjectVisible, setimageObjectVisible] = useState<Record<string, boolean>>({
    initialVisible: true, // 初始 - 衣服
    flocageVisible: false, // 印花
    broderieVisible: false,
    printVisible: false, // 刺绣
  })
  const [printVisible, setPrintVisible] = useState<boolean>(false); // 刺绣
  const router = useRouter();
  const transitions = useTransition(imageObjectVisible.flocageVisible, {
    from: { opacity: 0, transform: "translate(-100px, 200px)" },
    enter: { opacity: 1, transform: "translate(0px 0px)" },
    leave: { opacity: 0, transform: "translate(-100px, 250px)" },
  });

  const transitions2 = useTransition(imageObjectVisible.broderieVisible, {
    from: { opacity: 0, transform: "translate(150px, 250px)" },
    enter: { opacity: 1, transform: "translate(0px 0px)" },
    leave: { opacity: 0, transform: "translate(150px 250px)" },
  });

  const transitions3 = useTransition(imageObjectVisible.printVisible, {
    from: { opacity: 0,  scale: 1,  transform: "translate(-150px, -300px)" },
    enter: { scale: 1, opacity: 1, transform: "translate(0px 0px)" },
    leave: { opacity: 0, transform: "translate(-150px -300px)" },
  });

  const transitions4 = useTransition(imageObjectVisible.initialVisible, {
    from: { opacity: 0, transform: "translate(150px, 300px)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(150px, 300px)" },
  })

  const handleClickImage = (menu: string) => {
    setimageObjectVisible(pre => {
      const newPre = Object.fromEntries(Object.entries(pre).map(item => [item[0], false]))
     return {
      ...newPre,
      [`${menu}Visible`]: true
     }
    })
  }

  const leftCallback = () => {
    setimageObjectVisible(pre => {
      const newPre = Object.fromEntries(Object.entries(pre).map(item => [item[0], false]))
     return {
      ...newPre,
     }
    })
  }

  const handleClickEmbro = () => {
    setimageObjectVisible(pre => {
      const newPre = Object.fromEntries(Object.entries(pre).map(item => [item[0], false]))
     return {
      ...newPre,
      printVisible: true
     }
    })
  }

  const handleViewPrice = () => {
    if(activeMenu === 'flocage') {
      router.push('/prixlogos/flocagePrice')
    } else if(activeMenu === 'Broderie') {
      router.push('/prixlogos/broderiePrice')
    }
  }

  return (
    <div className="min-h-screen text-white bg-black flex flex-col justify-between">
      <div>
      <Navbar classname="z-50	sticky top-0 bg-black px-12" dark={true} />
        <div className="flex md:flex-row flex-col relative">
          <div className="md:w-2/5">
            <div style={{ paddingLeft: '3rem' }} className={cs(
              styles.title,
              activeMenu === 'price' ? styles.active : '',
            )}  onClick={() => handleClickImage('initial')}>
              <span>Prix pour 'impression de logas</span>
              <span>印制logo价目表</span>
            </div>
              <div className="absolute md:w-1/2 mt-8 text-blue-600 flex md:flex-col justify-between flex-row">
                <div className={cs(
                  activeMenu === 'flocage' ? styles.active : '',
                  "md:mb-48 flex flex-col cursor-pointer h-24 text-blue-600 pl-12 w-3/4",
                  styles.item,
                )} onClick={() => handleClickImage('flocage')}>
                  <span className="tracking-widest font-bold">印花</span>
                  <span>flocage</span>
                </div>
                <div className={cs(
                  activeMenu === 'Broderie' ? styles.active : '',
                  "md:mb-24 flex flex-col cursor-pointer h-24 text-blue-600 md:mr-0 mr-18 w-3/4 pl-12",
                  styles.item
                )} onClick={() => handleClickImage('broderie')}>
                  <span className="tracking-widest font-bold">刺绣</span>
                  <span>Broderie</span>
                </div>
              </div>
          </div>
            <div className={styles.rightBox}>
          {transitions(
              (style, item) =>
                item && (
                  <animated.div
                    className="md:-top-36 z-50 absolute"
                    style={{
                      ...style,
                    }}
                  >
                      <Image onClick={handleClickEmbro} src={cixiuone} alt="" />
                  </animated.div>
                )
            )}
          {transitions2(
            (style, item) =>
              item && (
                <animated.div
                  className="md:-top-36 z-50 absolute"
                  style={{
                    ...style,
                  }}
                >
                  <div>
                      <Image onClick={handleClickEmbro} src={cixiutwo} alt="" />
                    </div>
                </animated.div>
              )
          )}
          {transitions3(
            (style, item) =>
              item && (
                <animated.div
                  className="-left-20 md:-top-16 top-20 absolute"
                  style={{
                    ...style,
                  }}
                >
                  <div>
                      <Image className="h-[900px] w-[800px]" src={printing} alt="" />
                    </div>
                </animated.div>
              )
          )}
        
        {/* <Fade direction='bottom' triggerOnce> */}
          {imageObjectVisible.printVisible && (
              <div className="flex justify-end mr-12 z-[56] absolute right-20 cursor-pointer">
                <div className="text-blue-600 text-right" onClick={handleViewPrice}>
                  <div className="text-4xl font-medium tracking-wider">查看价格表</div>
                  <div className="text-xl">voir le prix</div>
                </div>
              </div>
            )}
            {/* </Fade> */}
             {transitions4(
            (style, item) =>
              item && (
                <animated.div
                  className="-left-20 md:-top-16 top-20 absolute"
                  style={{
                    ...style,
                  }}
                >
                  <div>
                      <Image className="h-[900px] w-[800px]" src={whiteT} alt="" />
                    </div>
                </animated.div>
              )
          )}
            </div>
        </div>
      </div>
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
      {(!imageObjectVisible.flocageVisible && !imageObjectVisible.broderieVisible) ?
      <FooterLocation />
      :
      <FooterLocation handleLeftCallback={leftCallback} leftLocation="/prixlogos" />
    }
      </div>
    </div>
  )
}

export default PrixLogos;