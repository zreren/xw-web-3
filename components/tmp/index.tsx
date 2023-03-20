import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import navigationlogo from '@/public/images/home/Navigationlogo.png'


const Navbar: React.FC<{}> = () => {

  return (
    <nav className="w-full flex flex-row items-center justify-between md:px-12 py-4 px-4 bg-neutral-200">
       <div className="flex flex-row items-center justify-between">
      <div className='flex flex-col'>
        <div><span className='md:text-5xl text-4xl font-bold'>E.</span><span className='text-3xl font-semibold'>design</span></div>
        <div className='md:text-2xl text-1xl font-semibold'>小雯工作室</div>
      </div>
      <Link href='/contact' className='md:text-[42px] text-2xl  ml-10 font-bold'>Infos</Link>
    </div>
    <div>
      <Image src={navigationlogo} alt="navlogo" />
    </div>
    </nav>
  )
}

export default Navbar;