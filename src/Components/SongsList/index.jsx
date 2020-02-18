import React from 'react';
import propTypes from 'prop-types';
import SongCard from '../SongCard';
import * as styles from './index.module.css';

const SongsList = (props) => {
  const { genreType, genreDetails } = props.location.state;

  return (
    <div className={styles.songListContainer}>
      <div className={styles.genreTypeText}>
        {genreType}
      </div>
      <div className={styles.songCards}>
        {
  genreDetails.map(
    (song) => (
      <div className={styles.card}>

        <SongCard
          albumArtUrl={song.albumArtUrl}
          artists={song.artists}
          albumName={song.albumName}
        />
      </div>
    ),
  )
  }

      </div>
    </div>

  );
};

export default SongsList;


SongsList.propTypes = {
  type: propTypes.string.isRequired,
  genreDetails: propTypes.string.isRequired,
};
