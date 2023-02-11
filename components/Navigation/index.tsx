import Link from "next/link";
import React from "react";
import Image from 'next/image'
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import styles from './index.module.css';
import cs from 'classnames';

interface NavigationProps {
  handleCloseNavigation: () => void
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { handleCloseNavigation } = props;

  const closeNavigation = () => {
    handleCloseNavigation()
  }

  return (
    <div className={styles.navigation}>
      <nav className="w-full flex flex-row items-center justify-between px-12 py-4 px-4">
       <div className="flex flex-row items-center justify-between">
      <div className='flex flex-col'>
        <div><span className='md:text-5xl text-4xl font-bold'>E.</span><span className='text-3xl font-semibold'>design</span></div>
        <div className='md:text-2xl text-1xl font-semibold  text-white'>小雯工作室</div>
      </div>
      <Link href='/contact' className='md:text-3xl text-2xl ml-10 font-bold'>Infos</Link>
    </div>
    <div className="cursor-pointer" onClick={closeNavigation}>
      <Image className="bg-white bg-blend-screen" src={navigationlogo} alt="navlogo" />
    </div>
    </nav>
     <div className="mt-12 md:text-2xl text-1xl">
        <div className={cs(
          styles.item
        )}>
          <span>PROJET</span>
          <span>作品</span>
        </div>
        <div className={styles.item}>
          <span>VÈTEMENTS PERSONNALISÉS</span>
          <span>工作服订制</span>
        </div>
        <div className={styles.item}>
          <span>PROCESSUS</span>
          <span>合作流程</span>
        </div>
        <div className={styles.item}>
          <span>CONTACT</span>
          <span>联系我们</span>
        </div>
     </div>
     <div className="flex justify-center items-center py-4">
      © 2022-2023 E.des/gn
     </div>
    </div>
  )
}

export default Navigation;