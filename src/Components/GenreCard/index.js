import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button/index';
import * as styles from './index.module.css';
import guitar from '../../images/001-guitar.png';

const GenreCard = ({ cardName }) => (
  <div className={styles.genreCardContainer}>
    <div className={styles.logo}>
      <img src={guitar} alt="Logo" className={styles.genreIcon} />
    </div>
    <div className={styles.cardBtn}>
      <Button>{cardName}</Button>
    </div>
  </div>
);
export default GenreCard;


GenreCard.propTypes = {
  cardName: propTypes.string.isRequired,
};
