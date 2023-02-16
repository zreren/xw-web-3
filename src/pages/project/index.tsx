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
          <div className='flex flex-col font-bold'>
              <div className='md:text-[40px] text-[28px] text-blue-600 tracking-wider'>
                SUR MESURE</div>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-3xl text-2xl font-bold	' href={''}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[32px] w-[28px]' src={branding} alt="" />
                </span>
                <span className='tracking-wider'>EBRANDING 品牌形象规划</span>
              </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-3xl text-2xl font-bold	' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[32px] w-[28px]' src={menu} alt="" />
                </span>
                <span>
                  <span className='tracking-wider'>MENU DESIGN 菜单订制</span>
                </span>
                </Link>
                <Link className='flex flex-row items-center hover:text-blue-600 md:text-3xl text-2xl font-bold	' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[32px] w-[28px]' src={menu} alt="" />
                </span>
                <span>
                <span className='tracking-wider'> PHOTOGRAPHIE 攝影</span>
                </span>
                </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-3xl text-2xl font-bold	' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[32px] w-[28px]' src={photographie} alt="" />
                </span>
                <span>
                <span className='tracking-wider'> M FLYER/DEPLIANT/ BROCHURE 广告纸/页/册</span>
                </span>
                </Link>
              
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-3xl text-2xl font-bold	' href={''}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[32px] w-[28px]' src={tampon} alt="" />
                </span>
                <span>
                <span className='tracking-wider'>TAMPON 公司/优惠卡印章</span>
                </span>
                </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-3xl text-2xl font-bold	' href={''}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[32px] w-[28px]' src={vetement} alt="" />
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