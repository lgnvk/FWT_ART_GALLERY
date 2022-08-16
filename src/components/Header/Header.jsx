import React from 'react';

import styles from './Header.module.scss';
import Logo from '../svgs/Logo';
import Burger from '../svgs/Burger';

function Header() {
  return (
    <div className={styles.header}>
      <Logo className={styles.header__logo} />
      <button type="button" className={styles.header__burger}>
        <Burger />
      </button>
    </div>
  );
}

export default Header;
