import React from "react";
import Link from 'next/link'
import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import styles from './index.module.css'
import Image from 'next/image'
import FooterLocation from "@/components/FooterLocation";
import personnalise from '@/public/images/personalise.png';
import cs from 'classnames';

const Personnalise: NextPage<{}> = () => {

  return (
    <div className={styles.personnalise}>
        <Image className="absolute h-full w-full z-0" src={personnalise} alt="" />
      <div className="flex flex-col">
        <Navbar classname="bg-transparent px-12 z-10" />
        <div className={styles.content}>
          <div className="mt-4">
            <div className={cs(
              "md:text-2xl text-1xl text-blue-500",
              styles.linkContent
            )}>
              <div>
                <p>Vètements de travail</p>
                <p className="mb-4">常规工作服</p>
              </div>
              <div>
                <p>Tablier</p>
                <p className="mb-4">围裙</p>
              </div>
              <div>
                <p>vétements de travail de cuisine</p>
                <p className="mb-4">厨房工作服</p>
              </div>
              <div>
                <p>Accessoires</p>
                <p className="mb-4">配饰</p>
              </div>
              <div>
                <p>Prix pour 'impression de logos</p>
                <p className="mb-4">印制 go价目装</p>
              </div>
            </div>
          </div>
          <div className="flex text-right flex-col md:mr-20 md:justify-center md:mt-48 md:text-5xl text-4xl font-bold">
            <p>VÊTEMENTS</p>
            <p className="md:my-8 my-4">PERSONNALISES</p>
            <p>工作服订制</p>
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