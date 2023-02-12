import React from "react";
import Navbar from "@/components/Navbar";
import Image from 'next/image'
import styles from './index.module.css';
import Link from 'next/link'
import { NextPage } from "next";
import FooterLocation from "@/components/FooterLocation";
import cs from 'classnames';
import whiteT from '@/public/images/whiteT.png';

const PrixLogos: NextPage<{}> = () => {

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
                )}>
                  <span className="md:text-7xl text-3xl tracking-widest font-bold">印花</span>
                  <span className="text-base">flocage</span>
                </div>
                <div className={cs(
                  "md:mb-24 flex flex-col cursor-pointer h-24 md:mr-0 mr-18",
                  styles.item
                )}>
                  <span className="md:text-7xl text-3xl tracking-widest font-bold">刺绣</span>
                  <span className="text-base">Broderie</span>
                </div>
              </div>
          </div>
          <div>
            <Image className="md:w-[1000px]" src={whiteT} alt="" />
          </div>
        </div>
      </div>
      
      <div className="px-12">
        <FooterLocation />
      </div>
    </div>
  )
}

export default PrixLogos;