import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import navigationlogo from '@/public/images/home/Navigationlogo.png'
import menuLight from '@/public/images/home/menuLight.png'
import Navigation from "../Navigation";
import cs from 'classnames'

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
    <>
    {navigationVisible && <Navigation handleCloseNavigation={closeNavigation} />}
    <nav className={cs(
      "w-full flex flex-row items-center justify-between px-12 py-4 px-4",
      classname,
    )}>
       <div className="flex flex-row items-center justify-between">
      <div className='flex flex-col'>
        <div><span className='md:text-5xl text-4xl font-bold'>E.</span><span className='md:text-4xl text-4xl font-semibold'>design</span></div>
        <div className='md:text-3xl text-1xl font-semibold'>小雯工作室</div>
      </div>
      <Link href='/contact' className='md:text-3xl text-2xl ml-10 font-bold'>Infos</Link>
    </div>
    <div className="cursor-pointer" onClick={toogleNavigation}>
      <Image src={dark ? menuLight : navigationlogo} alt="navlogo" />
    </div>
    </nav>
    </>
  )
}

export default Navbar;