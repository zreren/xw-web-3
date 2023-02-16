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
          <div className="flex justify-center items-center">
            © 2022-2023 E.des/gn
          </div>
        </div>
        <div className={styles.item}>
          <Image src={chef1} alt="" />
          <div>
          vêtements de chef 101 Blanc
          </div>
        </div>
        <div className={styles.item}>
          <Image src={chef2} alt="" />
          <div>
          vêtements de chef 101 Noir
          </div>
        </div>
        <div className={styles.item}>
          <Image src={chef3} alt="" />
          <div>
          vêtements de chef 102 Blanc/Noir
          </div>
        </div>
        <div className={styles.item}>
          <Image src={chef4} alt="" />
          <div>
          vêtements de chef 103 Blanc/Noir
          </div>
        </div>
      </div>
  )
}

export default KitchenCloth;