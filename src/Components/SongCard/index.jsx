
import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const SongCard = ({ albumArtUrl, artists, albumName }) => (
  <div className={styles.songCardContainer}>
    <div>
      <img src={albumArtUrl} alt={albumName} className={styles.albumPicture} />
    </div>
    <div className={styles.albumName}>
      {albumName}
    </div>
    <div className={styles.artists}>
      {artists.toString()}
    </div>
  </div>
);

export default SongCard;

SongCard.propTypes = {
  albumArtUrl: propTypes.string.isRequired,
  artists: propTypes.arrayOf(propTypes.string).isRequired,
  albumName: propTypes.string.isRequired,
};
