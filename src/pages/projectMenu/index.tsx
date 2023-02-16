import React, { useState } from "react";
import styles from './index.module.css';
import Image from 'next/image';
import cs from 'classnames';
import Link from "next/link";
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import FooterLocation from "@/components/FooterLocation";


interface NavigationProps {
  handleCloseNavigation: () => void
}


const Navigation:React.FC<NavigationProps> = (props) => {
  const { handleCloseNavigation } = props;

  const closeNavigation = () => {
    handleCloseNavigation()
  }

  return (
  <div className={styles.navigation}>
      <div className="h-full">
      <nav className={cs(
        styles.nav,
      )}>
       <div className="flex flex-row items-center justify-between w-full">
          <div>
            <span className='md:text-5xl text-4xl font-bold'>E.</span>
            <span className='md:text-4xl text-4xl font-semibold tracking-wider	'>design</span>
            <Link href='/contact' className='md:text-3xl text-2xl ml-10 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={closeNavigation}>
          <Image className="bg-white bg-blend-screen" src={navigationlogo} alt="navlogo" />
        </div>
        </div>
    </nav>

     <div className="h-full md:text-2xl text-1xl flex flex-col justify-between">
     <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-white'>小雯工作室</div>
      <div>
        <div className={cs(
          styles.item
        )}>
          <Link href="/project">PROJET</Link>
          <Link href="/project">作品</Link>
        </div>
        <div className={styles.item}>
          <Link href="/personnalise">VÈTEMENTS PERSONNALISÉS</Link>
          <Link href="/personnalise">工作服订制</Link>
        </div>
        <div className={styles.item}>
          <span>PROCESSUS</span>
          <span>合作流程</span>
        </div>
        <div className={styles.item}>
          <Link href="/contact">CONTACT</Link>
          <Link href="/contact">联系我们</Link>
        </div>
        <div className={styles.copyright}>
        © 2022-2023 E.des/gn
        </div>
        <div className="flex justify-center items-center py-4">
      </div>
      <div className="flex justify-center items-center">
        © 2022-2023 E.des/gn
      </div>
     </div>
     </div>
     </div>
    </div>
    )
}


export default function ProjectMenu() {
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<Record<string, any>>({
    headLeft: 'bg-white',
    headRight: 'bg-white',
  })
  const [textColor, setTextColor] = useState<string>('text-white')

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }
  
  return (
    <div className={styles.projectMenu}>
    {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
      <div className={cs(
        styles.head
      )}>
        <div className={`flex flex-row w-2/6 ${textColor}`}>
          <div className="px-12 pt-4">
            <div>
              <span className='md:text-5xl text-4xl font-bold'>E.</span>
              <span className='md:text-4xl text-4xl font-semibold tracking-wider'>design</span>
            </div>
            <div className="md:text-3xl text-1xl font-semibold">小雯工作室</div>
          </div>
          <div className={styles.infos}>
            <span>Infos</span>
          </div>
        </div>
        <div className="flex-1 bg-blue-200">
          <div className="h-full flex justify-end items-center pr-12">
            <Image className="bg-white" src={navigationlogo} alt="navlogo" />
          </div>
        </div>
      </div>
      <div className={styles.other}>
        <div className="flex-1 flex items-end">
          111
          222
        </div>
        <div className="md:px-12 px-1 md:mb-4 mb-1">
          <FooterLocation />
        </div>
      </div>
    </div>
  )
}