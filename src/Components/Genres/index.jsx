import React from 'react';
import propTypes from 'prop-types';
import GenreCard from '../GenreCard';
import * as styles from './index.module.css';

const Genres = (props) => {
  const {
    rockData, popData, bollywoodData, countryData,
  } = props.location.state;
  return (

    <div className={styles.genreContainer}>
      <div className={styles.genreText}>
        genres
      </div>
      <div className={styles.genres}>
        <div className={styles.row}>
          <div className={styles.card}>
            <GenreCard cardName="rock" genreDetails={rockData} />
          </div>
          <div className={styles.card}>
            <GenreCard cardName="pop" genreDetails={popData} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <GenreCard cardName="bollywood" genreDetails={bollywoodData} />
          </div>
          <div className={styles.card}>
            <GenreCard cardName="country" genreDetails={countryData} />
          </div>
        </div>
      </div>
    </div>

  );
};


export default Genres;

Genres.propTypes = {
  rockData: propTypes.string.isRequired,
  popData: propTypes.string.isRequired,
  bollywoodData: propTypes.string.isRequired,
  countryData: propTypes.string.isRequired,

};
