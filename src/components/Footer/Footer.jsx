import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        Проект реализован в рамках стажировки для Frontend-разработчиков от
        компании <span>Framework Team</span>
      </div>
      <div className={styles.footer__author}>Константин Логинов, 2022</div>
      <div className={styles.footer__socials}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Footer;
