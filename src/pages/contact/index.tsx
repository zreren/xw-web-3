import React from "react";
import Image from "next/image";
import wechatqrcode from '@/public/images/contact/wechatqrcode.png'
import maisonedesign from '@/public/images/contact/maisonedesign-2.png'
import styles from './index.module.css';
import Navbar from "@/components/Navbar";
import Link from 'next/link'

const Contact: React.FC<{}> = () => {

  const renderLeft = (leftIcon: string) => {

    return (
        <Link href="/" className={styles.left}>
          <span>RETOUR</span>
          <span>{leftIcon}</span>
        </Link>
    )
  }

  return (
    <>
    <Navbar classname="px-12" />
    <div className={styles.contact}>
      
      <div className="flex md:flex-row flex-col-reverse">
        <div className="flex flex-col justify-between">
          <div className="mb-16">
            <p className="md:text-5xl text-4xl font-bold">Contact nous</p>
            <div className="md:text-[16px] text-[13px] font-medium mt-[10px]">
              <p>Ouvert du lundi au vendredi</p>
              <p>9:30-12:30 13:15-18:30 (18:00 si couvre feu)</p>
              <p>Métro ligne 9 : saint-ambroise, PRENDRE LA SORTIE 5.</p>
              <p>61 Bld. Voltaire, 75011 Paris</p>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex">
              <Image className="mr-6 mb-2" src={wechatqrcode} alt="" />
              <Image src={wechatqrcode} alt="" />
            </div>
            微信掃描QR CODE
          </div>
        </div>
        <div className="flex flex-1 justify-end relative">
          <Image src={maisonedesign} alt="" />
          <div className={styles.tipsText}>
          <div className="flex md:items-end items-center mb-12 md:text-5xl text-4xl font-bold text-blue-600">
            <div>
              <p>
              PARIS11.
              </p>
              <p>
              61 Bld.Voltaire
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* footer 区域 */}
      <div className={styles.footer}>
        {renderLeft('<')}
        <div className={styles.copyrightone}>© 2022-2023 E.des/gn</div>
      </div>
      <div className={styles.copyrighttwo}>© 2022-2023 E.des/gn</div>
    </div>
    </>
  )
}

export default Contact;
