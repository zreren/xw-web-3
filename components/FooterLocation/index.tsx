import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import cs from 'classnames';
import router from 'next/router';

interface FooterLocationProps {
  left?: boolean;
  right?: boolean;
  classname?: string;
  leftLocation?: string;
  handleLeftCallback?: () => void;
}

const FooterLocation:React.FC<FooterLocationProps> = (props) => {
  const { classname, handleLeftCallback, leftLocation = '/' } = props;
  const renderLeft = (leftIcon: string) => {

  const goLeft = () => {
    if(handleLeftCallback) handleLeftCallback();
    router.push({
      pathname: leftLocation
    })
  }

    return (
        <div onClick={goLeft} className={styles.left}>
          <span>RETOUR</span>
          <span>{leftIcon}</span>
        </div>
    )
  }

  const renderRight = (rightIcon: string) => {

    return (
        <Link href="/contact" className={styles.right}>
          <span>{rightIcon}</span>
          <span>NOUS&nbsp;&nbsp;CONTACTER</span>
        </Link>
    )
  }

  return (
    <>
    <div className={cs(
      classname,
      styles.footer)}>
      {renderLeft('<')}
      <div className={styles.copyrightone}>© 2022-2023 E.des/gn</div>
      {renderRight('>')}
    </div>
    <div className={styles.copyrighttwo}>© 2022-2023 E.des/gn</div>
    </>
  )
}

export default FooterLocation;