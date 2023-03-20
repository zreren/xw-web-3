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
      "flex flex-row items-center justify-between w-full px-12 pt-4 relative md:text-5xl text-4xl",
      classname,
    )}>
    <div>
        <Link href={"/"}><span className='font-bold'>E.</span></Link>
        <Link href={"/"}>
          <span className='font-semibold tracking-wider'>design</span>
          </Link>
        <Link href='/' className='md:text-[42px] text-2xl  ml-10 font-bold'>Infos</Link>
      </div>
      <div className="cursor-pointer" onClick={toogleNavigation}>
      <Image src={dark ? menuLight : navigationlogo} alt="navlogo" />
    </div>
    </nav>
    <Link href={"/"}>
       <div className='md:text-3xl text-1xl font-normal px-12 tracking-wider text-black'>小雯工作室</div>
      </Link>
    </>
  )
}

export default Navbar;