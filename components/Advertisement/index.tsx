import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import Image from "next/image";
import cs from 'classnames';
import styles from './index.module.css';
import depliant1 from './img/depliant-1.png';
import depliant2 from './img/depliant-2.png';
import depliant3 from './img/depliant-3.png';

const Advertisement = () => {
  const [activeMenu, setActiveMenu] = useState<string>('');

  // card 整体切换动画
  const transitions = useTransition(activeMenu, {
    from: { opacity: 0, transform: "translateY(150%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    // leave: { opacity: 0, transform: "translateY(-50%)" },
  });

  const handClickMenu = (menu: string) => {
    setActiveMenu(menu)
  }
  console.log('activeMenu', activeMenu);
  
  return (
    <ul className={cs(styles.advertisement, activeMenu && styles.unActiveText)}>
        <li className={cs(styles.titleOne, activeMenu === 'depliant'? styles.active : "")} onClick={() => handClickMenu('depliant')}>Depliant 折页</li>
        {activeMenu === 'depliant' && (
          transitions(
            (style, item) =>
              item && (
              <animated.div style={{ ...style }} className={styles.depliant}>
                <Image src={depliant1} alt="" />
                <Image src={depliant2} alt=""  />
                <Image src={depliant3} alt=""  />
              </animated.div>
            ))
        )}
       
        <li className={cs(styles.titleOne, activeMenu === 'brochure'? styles.active : "")}  onClick={() => handClickMenu('brochure')}>Brochure 册子</li>
        <li className={cs(styles.titleOne, activeMenu === 'flyer'? styles.active : "")}  onClick={() => handClickMenu('flyer')}>Flyer 广告纸</li>
        <li className={cs(styles.titleOne, activeMenu === 'affiche'? styles.active : "")}  onClick={() => handClickMenu('affiche')}>Affiche 海报</li>
    </ul>
  )
}

export default Advertisement;