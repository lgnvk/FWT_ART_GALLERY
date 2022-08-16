import React from 'react';

import styles from './Card.module.scss';

import imgUrl from '../../img/image.jpg';
import Vector from '../svgs/Vector';

function Card() {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="smth" className={styles.card__img} />
      <div className={styles.card__info}>
        <div className={styles.card__title}>Jean-Honore Fragonard</div>
        <div className={styles.card__year}>1732 - 1806</div>
        <div className={styles.card__arrow}>
          <Vector />
        </div>
      </div>
    </div>
  );
}

export default Card;
