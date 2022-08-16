import React from 'react';

import Card from '../Card';
import styles from './CardsGrid.module.scss';

function CardsGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__item}>
        <Card />
      </div>
      <div className={styles.grid__item}>
        <Card />
      </div>
      <div className={styles.grid__item}>
        <Card />
      </div>
      <div className={styles.grid__item}>
        <Card />
      </div>
      <div className={styles.grid__item}>
        <Card />
      </div>
      <div className={styles.grid__item}>
        <Card />
      </div>
    </div>
  );
}

export default CardsGrid;
