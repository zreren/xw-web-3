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
  const [flocageVisible, setFlocageVisible] = useState<boolean>(false); // 绣花
  const [broderieVisible, setBroderieVisible] = useState<boolean>(false); // 刺绣
  const transitions = useTransition(flocageVisible, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
    // config: { mass: 0.5, tension: 500, friction: 50 },
  });

  const transitions2 = useTransition(broderieVisible, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
    // config: { mass: 0.5, tension: 500, friction: 50 },
  });

  const handleClickFlocage = () => {
    setFlocageVisible(true);
    setBroderieVisible(false);
  }

  const handleClickBroderie = () => {
    setFlocageVisible(false);
    setBroderieVisible(true);
  }

  const leftCallback = () => {
    setFlocageVisible(false);
    setBroderieVisible(false);
  }

  return (
    <div className="min-h-screen text-white bg-black flex flex-col justify-between">
      <div>
      <Navbar classname="bg-black px-12" />
        <div className="flex md:flex-row flex-col px-12">
          <div className="md:w-1/4">
            <div className={styles.title}>
              <span>Prix pour 'impression de logas</span>
              <span>印制logo价目表</span>
            </div>
              <div className="md:w-1/2 mt-8 text-blue-600 flex md:flex-col justify-between flex-row">
                <div className={cs(
                  "md:mb-48 flex flex-col cursor-pointer h-24",
                  styles.item,
                )} onClick={handleClickFlocage}>
                  <span className="md:text-7xl text-3xl tracking-widest font-bold">印花</span>
                  <span className="text-base">flocage</span>
                </div>
                <div className={cs(
                  "md:mb-24 flex flex-col cursor-pointer h-24 md:mr-0 mr-18",
                  styles.item
                )} onClick={handleClickBroderie}>
                  <span className="md:text-7xl text-3xl tracking-widest font-bold">刺绣</span>
                  <span className="text-base">Broderie</span>
                </div>
              </div>
          </div>
          <div>
          {transitions(
            (style, item) =>
              item && (
                <animated.div
                  style={{
                    ...style
                  }}
                >
                  <Image className="md:w-[1000px]" src={cixiuone} alt="" />
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
                  <Image className="md:w-[1000px]" src={cixiutwo} alt="" />
                </animated.div>
              )
          )}
           {(!flocageVisible && !broderieVisible) && <Image className="md:w-[1000px]" src={whiteT} alt="" />}
          </div>
        </div>
      </div>
      
      <div className="px-12">
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