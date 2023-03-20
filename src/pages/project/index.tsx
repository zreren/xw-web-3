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
      <div className="min-h-screen bg-white flex flex-col relativr">
        <Navbar classname="bg-white px-12" />
        <div className="mb-6 absolute bottom-0 md:px-12 px-8">
          {/*  Content Menu */}
          <div className='flex flex-col font-bold'>
              <div className='md:text-[80px] text-[55px] text-blue-600 tracking-wider'>
                SUR MESURE</div>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-[20px] font-bold mb-2	' href={'/projectMenu?active=brand'}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={branding} alt="" />
                </span>
                <span className='tracking-wider text-black'>EBRANDING 品牌形象规划</span>
              </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4		' href={'/projectMenu?active=design'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={menu} alt="" />
                </span>
                <span>
                  <span className='tracking-wider text-black'>MENU DESIGN 菜单订制</span>
                </span>
                </Link>
                <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4		' href={'/projectMenu?active=photo'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={menu} alt="" />
                </span>
                <span>
                <span className='tracking-wider text-black'> PHOTOGRAPHIE 攝影</span>
                </span>
                </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4' href={'/projectMenu?active=brochure'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[32px]' src={photographie} alt="" />
                </span>
                <span>
                <span className='tracking-wider text-black'>FLYER/DEPLIANT/ BROCHURE 广告纸/页/册</span>
                </span>
                </Link>
              
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4' href={'/projectMenu?active=tampon'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={tampon} alt="" />
                </span>
                <span>
                <span className='tracking-wider text-black'>TAMPON 公司/优惠卡印章</span>
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