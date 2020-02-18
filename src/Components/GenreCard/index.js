import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/index';
import * as styles from './index.module.css';
import guitar from '../../images/001-guitar.png';


const GenreCard = ({ cardName }) => (

  <div className={styles.genreCardContainer}>
    <div className={styles.logo}>
      <img src={guitar} alt="Logo" className={styles.genreIcon} />
    </div>
    <div className={styles.cardBtn}>
      <Link to={{ pathname: '/genres/songs', state: { genreType: cardName } }}>
        <Button>{cardName}</Button>
      </Link>
    </div>
  </div>


);
export default GenreCard;


GenreCard.propTypes = {
  cardName: propTypes.string.isRequired,
};
