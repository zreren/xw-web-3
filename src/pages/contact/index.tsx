import React from "react";
import Image from "next/image";
import wechatqrcode from '@/public/images/contact/wechatqrcode.png'
import qrCode from '@/public/images/contact/qrCode.png'
import maisonedesign from '@/public/images/contact/maisonedesign-2.png'
import styles from './index.module.css';
import Navbar from "@/components/Navbar";
import FooterLocation from "@/components/FooterLocation";

const Contact: React.FC<{}> = () => {

  return (
    <div className={styles.contact}>
       <Navbar classname="bg-neutral-200" />
       <div className={styles.content}>
        <div className={styles.left}>
            <div className="">
             <p className="md:text-[64px] tracking-wider text-4xl font-bold md:mb-8 mb-2">Contact nous</p>
             <div className="md:text-[24px] text-[13px] font-medium mt-[10px]">
               <p>Ouvert du lundi au vendredi</p>
               <p>9:30-12:30 13:15-18:30 (18:00 si couvre feu)</p>
               <p>Métro ligne 9 : saint-ambroise, PRENDRE LA SORTIE 5.</p>
               <p>61 Bld. Voltaire, 75011 Paris</p>
             </div>
          </div>
          <div>
              <div className="flex flex-col justify-between">
                <div className="flex">
                  <Image className="mr-6 mb-2" src={qrCode} alt="" />
                  <Image className="mr-6 mb-2" src={wechatqrcode} alt="" />
                </div>
                <div>
                </div>
               <div>微信扫描QR CODE</div>
             </div>
          </div>
        </div>
        <div className={styles.right}>
            <div className={styles.rightText}>
            <p>
               PARIS11.
               </p>
               <p>
               61 Bld.Voltaire
              </p>
            </div>
            <Image src={maisonedesign} alt="" />
        </div>
       </div>
       <div className="fixed bottom-0 md:px-12 mb-4 px-2 w-full">
        <FooterLocation hidden="right" />
        </div>
    </div>
  )
}

export default Contact;
