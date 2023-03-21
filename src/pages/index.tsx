import Head from 'next/head'
import Image from 'next/image'
import branding from '@/public/images/home/Branding.png'
import homeImg from '@/public/images/home/Final_２.png'
import menu from '@/public/images/home/Menu.png'
import photographie from '@/public/images/home/Photographie.png'
import tampon from '@/public/images/home/Tampon.png'
import vetement from '@/public/images/home/Vetement.png'
import noscontacter from '@/public/images/home/Noscontacter.png'
import Navigation from '@/components/Navigation';
import copyright from '@/public/images/home/copyright.png'
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import iconarrowdown from '@/public/images/home/Iconarrowdown.png'
import Link from 'next/link'
import { useEffect, useState, useCallback, useRef,  } from 'react'
import cs from 'classnames'
import styles from './index.module.css';


// Home
function Home() {
  const [visible, setVisible] = useState<boolean>(false);
  const contentRef = useRef<any>(null)
  const [navigationVisible, setNavigationVisible] =  useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const content = contentRef.current;
    if(window.document.documentElement.scrollTop  > 200) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [contentRef])

  const toBottom = useCallback(() => {
    window.scrollTo({ top: 9999, behavior: 'smooth' });
  }, [])

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  useEffect(() => {
    window.document.addEventListener('scroll', handleScroll)

    return () => {
      window.document.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const str = '>'

  console.log('navigationVisible', visible, navigationVisible);
  

  return (
       <div className='w-full h-full min-h-screen bg-neutral-200 text-black'> 
        {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
        {/* <nav className={cs(
          'w-full flex flex-row mix-blend-multiply items-center justify-between px-12 py-4 bg-nav-color z-[50]',
          visible && !navigationVisible ? {
            fixed: true,
            zIndex: 1000,
          } : { hidden: true },
          )}>
             <div className="flex flex-row items-center justify-between w-full">
          <div className='cursor-pointer'>
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='md:text-5xl text-4xl font-bold '>E.</span>
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='md:text-5xl text-4xl font-semibold tracking-wider'>design</span>
            <Link href='/contact' className='md:text-[42px] text-2xl  ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={toogleNavigation}>
          <Image className="bg-blend-screen" src={navigationlogo} alt="navlogo" />
        </div>
        </div>

        <div className="text-blue-500">小雯工作室</div>
        </nav> */}
        {visible && !navigationVisible && 
        <nav className={cs(
          styles.nav,
          visible && !navigationVisible ? {
            fixed: true,
            zIndex: 1000,
          } : { hidden: true },
        )}>
          <div className='cursor-pointer'>
            <span className='font-bold' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>E.</span>
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='font-semibold tracking-wider'>design</span>
            <Link href='/contact' className='md:text-[42px] text-2xl  ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={toogleNavigation}>
          <Image className="bg-blend-screen" src={navigationlogo} alt="navlogo" />
        </div>
       <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles.title}>小雯工作室</div>
      </nav>
      }
          
        {/* 图片 */}
        <video className='w-full' muted autoPlay loop src="/video/Final_２.mp4" />
          {/* 内容区域 */}
          <div ref={contentRef} className='flex flex-col px-12 pt-32 justify-between	'>
            <div style={{ height: '80vh'}}>
              <div className='flex flex-col md:text-[16px] text-[13px]'>
                <div className={cs(
                  'flex md:text-[26px] text-[16px] flex-col font-bold tracking-wide',
                  styles.blackText,
                )}>
                  <span>Forte de ses années d'expérience dans le domaine de la conception visuelle</span>
                  <span>et graphique, E. design est en mesure de fournir des services de conception</span>
                  <span>visuelle tels que la conception de marques, de photographies, de menus, de</span>
                  <span>sites web et d'emballages, etc. L'équipe d'E. design se réjouit d'écouter les</span>
                  <span>besoins de ses clients et de trouver la solution la plus adaptée.</span>
                </div>
                <div className='flex flex-col items-end font-extrabold text-2xl text-blue-600 mt-12'>
                  <span>PARIS11.</span>
                  <span>61 Bld. Voltaire</span>
                  <span>→ CONTACT NOUS</span>
                  <span onClick={toBottom} className='mr-56 cursor-pointer'>
                    <Image width={70} src={iconarrowdown} alt="" />
                  </span>
                </div>
              </div>
             
            </div>
            {/*  Content Menu */}
            <div className='flex flex-col font-bold'>
              <div className='md:text-[80px] text-[55px] text-blue-600 tracking-wider'>
                SUR MESURE</div>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-[20px] font-bold mb-2	' href={'/newProjectMenu?active=brand'}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={branding} alt="" />
                </span>
                <span className='tracking-wider'>EBRANDING 品牌形象规划</span>
              </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-3xl font-bold mb-4' href={'/newProjectMenu?active=design'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={menu} alt="" />
                </span>
                <span>
                  <span className='tracking-wider'>MENU DESIGN 菜单订制</span>
                </span>
                </Link>
                <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4' href={'/newProjectMenu?active=photo'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={menu} alt="" />
                </span>
                <span>
                <span className='tracking-wider'> PHOTOGRAPHIE 攝影</span>
                </span>
                </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4' href={'/newProjectMenu?active=brochure'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[32px]' src={photographie} alt="" />
                </span>
                <span>
                <span className='tracking-wider'>FLYER/DEPLIANT/ BROCHURE 广告纸/页/册</span>
                </span>
                </Link>
              
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4' href={'/newProjectMenu?active=tampon'}>
              <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[20px]' src={tampon} alt="" />
                </span>
                <span>
                <span className='tracking-wider'>TAMPON 公司/优惠卡印章</span>
                </span>
                </Link>
              <Link className='flex flex-row items-center hover:text-blue-600 md:text-[50px] text-2xl font-bold mb-4' href={'/personnalise'}>
                <span className='mr-2 font-semibold'>
                  <Image className='md:w-[50px] w-[32px]' src={vetement} alt="" />
                </span>
                <span>
                IVETEMENT PERSONNALISES 工作服订制
                </span>
                </Link>

                 {/* footer 区域 */}
                <div className='flex justify-center w-screen flex-row flex-wrap items-center mt-1 cursor-pointer'>
                  <div className='flex-1'>
                    <Link href="/contact" className={styles.noscontacter}>
                      <span className='absolute'>{str}</span>
                      <span className='absolute'>NOUS CONTACTER</span>
                      <span className='opacity-0'>11</span>
                    </Link>
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


export default Home;


