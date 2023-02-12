import React from "react";
import Navbar from "@/components/Navbar";
import Image from 'next/image'
import branding from '@/public/images/home/Branding.png'
import menu from '@/public/images/home/Menu.png'
import photographie from '@/public/images/home/Photographie.png'
import tampon from '@/public/images/home/Tampon.png'
import vetement from '@/public/images/home/Vetement.png'
import styles from './index.module.css';
import Link from 'next/link'
import { NextPage } from "next";


const Project: NextPage<{}> = () => {

  const renderRight = (rightIcon: string) => {

    return (
        <Link href="/contact" className={styles.right}>
          <span>{rightIcon}</span>
          <span>NOUS&nbsp;&nbsp;CONTACTER</span>
        </Link>
    )
  }

  return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar classname="bg-white px-12" />
        <div className="mb-6  px-12">
          {/*  Content Menu */}
          <div className='flex flex-col mb-6'>
              <div className='md:text-[32px] text-[24px] text-blue-600'>
                SUR MESURE</div>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[20px] text-[16px]' href={''}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[20px] w-[16px] bg-blend-lighten' src={branding} alt="" />
                </span>
                <span>
                  EBRANDING 品牌形象规划
                </span>
              </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[20px] text-[16px]' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[20px] w-[16px]' src={menu} alt="" />
                </span>
                <span>
                  MENU DESIGN 菜单订制
                </span>
                </Link>
                <Link className='flex flex-row items-center hover:text-blue-600 md:text-[20px] text-[16px]' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[20px] w-[16px]' src={menu} alt="" />
                </span>
                <span>
                  攝影
                </span>
                </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[20px] text-[16px]' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[20px] w-[16px]' src={photographie} alt="" />
                </span>
                <span>
                M FLYER/DEPLIANT/ BROCHURE 广告纸/页/册
                </span>
                </Link>
              
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[20px] text-[16px]' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[20px] w-[16px]' src={tampon} alt="" />
                </span>
                <span>
                凸TAMPON 公司/优惠卡印章
                </span>
                </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[20px] text-[16px]' href={''}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[20px] w-[16px]' src={vetement} alt="" />
                </span>
                <span>
                IVETEMENT PERSONNALISES 工作服订制
                </span>
                </Link>

            </div>
             {/* footer 区域 */}
             <div className={styles.footer}>
              {renderRight('>')}
              <div className={styles.copyrightone}>© 2022-2023 E.des/gn</div>
            </div>
            <div className={styles.copyrighttwo}>© 2022-2023 E.des/gn</div>
        </div>
      </div>
  )
}

export default Project;