import React from "react";
import styles from './index.module.css';
import Image from 'next/image'
import chefIndex from '@/public/images/chef/index.png';
import chef1 from '@/public/images/chef/Chef-1.png';
import chef2 from '@/public/images/chef/Chef-2.png';
import chef3 from '@/public/images/chef/Chef-3.png';
import chef4 from '@/public/images/chef/Chef-4.png';

const KitchenCloth:React.FC<{}> = (props) => {

  return (
    <div
        className={styles.chef}
      >
        <div className={styles.item}>
          <Image src={chefIndex} alt="" />
        </div>
        <div className={styles.item}>
          <Image src={chef1} alt="" />
        </div>
        <div className={styles.item}>
          <Image src={chef2} alt="" />
        </div>
        <div className={styles.item}>
          <Image src={chef3} alt="" />
        </div>
        <div className={styles.item}>
          <Image src={chef4} alt="" />
          <div></div>
        </div>
      </div>
  )
}

export default KitchenCloth;