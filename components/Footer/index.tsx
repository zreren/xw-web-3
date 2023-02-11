import React from "react";
import Image from 'next/image'
import noscontacter from '@/public/images/home/Noscontacter.png'
import copyright from '@/public/images/home/copyright.png'
import styles from './index.module.css'
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  const str = '<'
  return (
    <div style={{ marginTop: '-10px' }}>
      <div className='flex px-12 py-4 bg-neutral-200 justify-center w-screen flex-row flex-wrap items-center mt-1 cursor-pointer'>
        <Link href="/" className={styles.retour}>
          <span>RETOUR</span>
          <span>{str}</span>
        </Link>
        <div className='flex justify-center flex-1'>
        <Image height={15} width={120} src={copyright} alt="" />
        </div>
        <div className='flex-1'></div>
      </div>
      </div>
  )
}

export default Footer;