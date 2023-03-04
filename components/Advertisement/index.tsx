import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import router from 'next/router';
import Image from "next/image";
import cs from 'classnames';
import styles from './index.module.css';
import depliant1 from './img/depliant-1.png';
import depliant2 from './img/depliant-2.png';
import depliant3 from './img/depliant-3.png';
import brochure1 from './img/brochure-1.png';
import brochure2 from './img/brochure-2.png';
import flyer1 from './img/flyer-1.png';
import flyer2 from './img/flyer-2.png';
import flyer3 from './img/flyer-3.png';
import affiche from './img/affiche.png';

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
    <ul className={cs(
      styles.advertisement,
      activeMenu && styles.unActiveText,
      activeMenu === 'depliant' && styles.depliantPosition,
      activeMenu === 'brochure' && styles.brochurePosition,
      activeMenu === 'flyer' && styles.flyerPosition,
      activeMenu === 'affiche' && styles.affichePosition,
    )}>
        <li className={cs(styles.contentOne, activeMenu === 'depliant'? styles.active : "")} onClick={() => handClickMenu('depliant')}>
          <span>Depliant 折页 </span>
        {activeMenu === 'depliant' && (
          transitions(
            (style, item) =>
              item && (
              <animated.div style={{ ...style }} className={styles.depliant}>
                <Image onClick={() => router.push('/depliant/one')} src={depliant1} alt="" />
                <Image onClick={() => router.push('/depliant/two')} src={depliant2} alt=""  />
                <Image onClick={() => router.push('/depliant/three')} src={depliant3} alt=""  />
              </animated.div>
            ))
        )}
        </li>
        <li className={cs(styles.contentTwo, activeMenu === 'brochure'? styles.active : "")}  onClick={() => handClickMenu('brochure')}>
          <span>Brochure 册子</span>
          {activeMenu === 'brochure' && (
            transitions(
              (style, item) =>
                item && (
                <animated.div style={{ ...style }} className={styles.depliant}>
                  <Image src={brochure1} alt="" />
                  <Image src={brochure2} alt=""  />
                </animated.div>
              ))
          )}
        </li>
        <li className={cs(styles.contentThree, activeMenu === 'flyer'? styles.active : "")}  onClick={() => handClickMenu('flyer')}>
          <span>Flyer 广告纸</span>
          {activeMenu === 'flyer' && (
            transitions(
              (style, item) =>
                item && (
                <animated.div style={{ ...style }} className={styles.flyer}>
                  <Image src={flyer1} alt="" />
                  <Image src={flyer2} alt=""  />
                  <Image src={flyer3} alt=""  />
                </animated.div>
              ))
          )}
        </li>
        <li className={cs(styles.contentFour, activeMenu === 'affiche'? styles.active : "")}  onClick={() => handClickMenu('affiche')}>
          <span>Affiche 海报</span>
          {activeMenu === 'affiche' && (
            transitions(
              (style, item) =>
                item && (
                <animated.div style={{ ...style }} className={styles.flyer}>
                  <Image src={affiche} alt="" />
                </animated.div>
              ))
          )}
        </li>
    </ul>
  )
}

export default Advertisement;