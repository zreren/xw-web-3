import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import menuLight from '@/public/images/home/menuLight.png'
import Navigation from "../Navigation";
import cs from 'classnames'
import styles from './index.module.css';

interface NavBarProps {
  classname?: string;
  dark?: boolean;
}

const Navbar: React.FC<NavBarProps> = (props) => {
  const { classname, dark } = props;
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false);

  const closeNavigation = () => {
    setNavigationVisible(false)
  }

  const toogleNavigation = () => {
    setNavigationVisible(pre => (
      !pre
    ))
  }

  return (
    <div className="sticky top-0 w-full z-[50]">
    {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
      {!navigationVisible && <nav className={cs(
          styles.nav,
          classname
        )}>
          <div>
            <Link href={"/"}><span className='font-bold'>E.</span></Link>
            <Link href={"/"}>
              <span className='font-semibold tracking-wider'>design</span>
              </Link>
            <Link href='/contact' className='md:text-[42px] text-2xl  ml-12 font-bold'>Infos</Link>
          </div>
          <div className="cursor-pointer" onClick={toogleNavigation}>
          <Image src={dark ? menuLight : navigationlogo} alt="navlogo" />
        </div>
      </nav>}
      <Link href={"/"}>
       <div className={cs(styles.title)}>小雯工作室</div>
      </Link>
      </div>
  )
}

export default Navbar;