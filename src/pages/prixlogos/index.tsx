import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import Navbar from "@/components/Navbar";
import Image from 'next/image'
import styles from './index.module.css';
import Link from 'next/link'
import { NextPage } from "next";
import FooterLocation from "@/components/FooterLocation";
import cs from 'classnames';
import whiteT from '@/public/images/whiteT.png';
import cixiuone from '@/public/images/prixlogos/cixiu-1.png'
import cixiutwo from '@/public/images/prixlogos/cixiu-2.png'

const PrixLogos: NextPage<{}> = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('price');
  const [flocageVisible, setFlocageVisible] = useState<boolean>(false); // 绣花
  const [broderieVisible, setBroderieVisible] = useState<boolean>(false); // 刺绣
  const transitions = useTransition(flocageVisible, {
    from: { opacity: 0, transform: "translate(-100px, 200px)" },
    enter: { opacity: 1, transform: "translate(0px 0px)" },
    leave: { opacity: 0, transform: "translate(-100px, 250px)" },
  });

  const transitions2 = useTransition(broderieVisible, {
    from: { opacity: 0, transform: "translate(150px, 250px)" },
    enter: { opacity: 1, transform: "translate(0px 0px)" },
    leave: { opacity: 0, transform: "translate(150px 250px)" },
  });

  const handleClickFlocage = () => {
    setFlocageVisible(true);
    setBroderieVisible(false);
    setActiveMenu('flocage');
  }

  const handleClickBroderie = () => {
    setFlocageVisible(false);
    setBroderieVisible(true);
    setActiveMenu('Broderie');
  }

  const handleClickPrice = () => {
    setFlocageVisible(false);
    setBroderieVisible(false);
    setActiveMenu('price');
  }

  const leftCallback = () => {
    setFlocageVisible(false);
    setBroderieVisible(false);
  }

  return (
    <div className="h-screen text-white bg-black flex flex-col justify-between">
      <div>
      <Navbar classname="z-50	sticky top-0 bg-black px-12" dark={true} />
        <div className="flex md:flex-row flex-col relative">
          <div className="md:w-2/5">
            <div style={{ paddingLeft: '3rem' }} className={cs(
              activeMenu === 'price' ? styles.active : '',
              styles.title
            )}  onClick={handleClickPrice}>
              <span>Prix pour 'impression de logas</span>
              <span>印制logo价目表</span>
            </div>
              <div className="absolute md:w-1/2 mt-8 text-blue-600 flex md:flex-col justify-between flex-row">
                <div className={cs(
                  activeMenu === 'flocage' ? styles.active : '',
                  "md:mb-48 flex flex-col cursor-pointer h-24 text-white pl-12",
                  styles.item,
                )} onClick={handleClickFlocage}>
                  <span className="md:text-7xl text-3xl tracking-widest font-bold">印花</span>
                  <span className="text-base">flocage</span>
                </div>
                <div className={cs(
                  activeMenu === 'Broderie' ? styles.active : '',
                  "md:mb-24 flex flex-col cursor-pointer h-24 md:mr-0 mr-18 text-white pl-12",
                  styles.item
                )} onClick={handleClickBroderie}>
                  <span className="md:text-7xl text-3xl tracking-widest  font-bold">刺绣</span>
                  <span className="text-base">Broderie</span>
                </div>
              </div>
          </div>
            <div className={styles.rightBox}>
          {transitions(
              (style, item) =>
                item && (
                  <animated.div
                    style={{
                      ...style
                    }}
                  >
                    <div className="md:w-[600px] w-[400px] absolute -left-20 md:-top-20 top-20">
                      <Image src={cixiuone} alt="" />
                    </div>
                  </animated.div>
                )
            )}
          {transitions2(
            (style, item) =>
              item && (
                <animated.div
                  style={{
                    ...style
                  }}
                >
                  <div className="md:w-[600px] w-[400px] absolute -left-20 md:-top-20 top-20">
                      <Image src={cixiutwo} alt="" />
                    </div>
                </animated.div>
              )
          )}
          <div className="absolute top-10">
             {(!flocageVisible && !broderieVisible) && (
              <div className="md:w-[600px] w-[400px] absolute -left-20 md:-top-20 top-20">
              <Image src={whiteT} alt="" />
            </div>
             )}
          </div>
          
            </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
      {(!flocageVisible && !broderieVisible) ?
      <FooterLocation />
      :
      <FooterLocation handleLeftCallback={leftCallback} leftLocation="/prixlogos" />
    }
      </div>
    </div>
  )
}

export default PrixLogos;