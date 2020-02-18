import React from 'react';
import GenreCard from '../GenreCard';
import * as styles from './index.module.css';

const Genres = () => (
  <div>

    <div className={styles.genreContainer}>
      <div className={styles.genreText}>
        genres
      </div>
      <div className={styles.genres}>
        <div className={styles.card}>
          <GenreCard cardName="rock" />
        </div>
        <div className={styles.card}>
          <GenreCard cardName="pop" />
        </div>
        <div className={styles.card}>
          <GenreCard cardName="bollywood" />
        </div>
        <div className={styles.card}>
          <GenreCard cardName="country" />
        </div>
      </div>
    </div>
  </div>
);


export default Genres;
