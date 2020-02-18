import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/index';
import * as styles from './index.module.css';
import guitar from '../../images/001-guitar.png';
import amplifier from '../../images/006-amplifier.png';
import electricGuitar from '../../images/012-electric guitar.png';
import singer from '../../images/049-singer.png';

const GenreCard = ({ cardName, genreDetails }) => {
  let logo;
  if (cardName === 'rock') { logo = guitar; }
  if (cardName === 'pop') { logo = amplifier; }
  if (cardName === 'bollywood') { logo = electricGuitar; }
  if (cardName === 'country') { logo = singer; }
  return (
    <div className={styles.genreCardContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.genreIcon} />
      </div>
      <div className={styles.cardBtn}>
        <Link to={{ pathname: '/genres/songs', state: { genreType: cardName, genreDetails } }}>
          <Button>{cardName}</Button>
        </Link>
      </div>
    </div>
  );
};


export default GenreCard;


GenreCard.propTypes = {
  cardName: propTypes.string.isRequired,
  genreDetails: propTypes.arrayOf(propTypes.string).isRequired,
};
