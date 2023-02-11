import Head from 'next/head'
import Image from 'next/image'
import branding from '@/public/images/home/Branding.png'
import homeImg from '@/public/images/home/Final_２.png'
import menu from '@/public/images/home/Menu.png'
import photographie from '@/public/images/home/Photographie.png'
import tampon from '@/public/images/home/Tampon.png'
import vetement from '@/public/images/home/Vetement.png'
import noscontacter from '@/public/images/home/Noscontacter.png'
import copyright from '@/public/images/home/copyright.png'
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import iconarrowdown from '@/public/images/home/Iconarrowdown.png'
import Link from 'next/link'
import { useEffect, useState, useCallback, useRef } from 'react'
import cs from 'classnames'



// Home
// Home 因为Navigation是滑动到一定位置才出现， 因此采用自定义的Navigation
export default function Home() {
  const [visible, setVisible] = useState<boolean>(false);
  const contentRef = useRef<HTMLElement | null>(null)

  const handleScroll = useCallback(() => {
    const content = contentRef.current;
    const { height } = content?.getBoundingClientRect() as DOMRect;
    if(window.document.documentElement.scrollTop  > height - 200) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [contentRef])

  const toBottom = useCallback(() => {
    window.scrollTo({ top: 9999, behavior: 'smooth' });
  }, [])

  useEffect(() => {
    window.document.addEventListener('scroll', handleScroll)

    return () => {
      window.document.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
       <div className='w-full h-full min-h-screen bg-neutral-200'>
        {/* nav */}
        <nav className={cs(
          'w-full flex flex-row items-center justify-between px-12 py-4 bg-neutral-200 backdrop-opacity-100',
          visible ? {
            fixed: true,
            zIndex: 1000,
          } : { hidden: true }
          )}>
          <div className="flex flex-row items-center justify-between">
            <div className='flex flex-col'>
              <div><span className='md:text-5xl text-4xl font-bold'>E.</span><span className='text-3xl font-semibold'>design</span></div>
              <div className='md:text-2xl text-1xl font-semibold'>小雯工作室</div>
            </div>
            <div className='md:text-3xl text-2xl ml-10 font-bold'>Infos</div>
          </div>
          <div>
            <Image src={navigationlogo} alt="navlogo" />
          </div>
        </nav>

        {/* 图片 */}
          <Image className='w-full' src={homeImg} alt="home_image" />
          {/* 内容区域 */}
          <div ref={contentRef} className='flex flex-col px-8 pt-32 justify-between	'>
            <div style={{ height: '80vh'}}>
              <div className='flex flex-col md:text-[16px] text-[13px]'>
                <div className='flex flex-col font-semibold'>
                  <span>Forte de ses années d'expérience dans le domaine de la conception visuelle</span>
                  <span>et graphique, E. design est en mesure de fournir des services de conception</span>
                  <span>visuelle tels que la conception de marques, de photographies, de menus, de</span>
                  <span>sites web et d'emballages, etc. L'équipe d'E. design se réjouit d'écouter les</span>
                  <span>besoins de ses clients et de trouver la solution la plus adaptée.</span>
                </div>
                <div className='flex flex-col items-end font-semibold text-blue-700 mt-12'>
                  <span>PARIS11.</span>
                  <span>61 Bid. Voltaire</span>
                  <span>→ CONTACT NOUS</span>
                  <span onClick={toBottom} className='mr-32 cursor-pointer'>
                    <Image src={iconarrowdown} alt="" />
                  </span>
                </div>
              </div>
             
            </div>
            {/*  Content Menu */}
            <div className='flex flex-col'>
              <div className='md:text-[32px] text-[24px] text-blue-600'>
                SUR MESURE</div>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[20px] text-[16px]' href={''}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[20px] w-[16px]' src={branding} alt="" />
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

                 {/* footer 区域 */}
                <div className='flex justify-center w-screen flex-row flex-wrap items-center mt-1 cursor-pointer'>
                  <div className='flex-1'>
                    <Image width={250} src={noscontacter} alt="" />
                  </div>
                  <div className='flex justify-center flex-1'>
                  <Image height={15} width={120} src={copyright} alt="" />
                  </div>
                  <div className='flex-1'></div>
                </div>
            </div>
          </div>
       </div>
  )
}






