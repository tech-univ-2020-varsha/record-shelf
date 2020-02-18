import React from 'react';
import SongCard from '../SongCard';
import * as styles from './index.module.css';

const SongsList = (props) => {
  const type = props.location.state.genreType;
  console.log('type:', type);
  const genreSongs = JSON.parse(localStorage.getItem(type));
  console.log(genreSongs);
  return (
  //     <div>
  //       {
  // genreSongs.map((song) => <SongCard albumArtUrl={song.albumArtUrl} artists={song.artists} albumName={song.albumName} />)
  // }

  //     </div>
    <div className={styles.songListContainer}>
      <div className={styles.genreTypeText}>
        {type}
      </div>
      <div className={styles.songCards}>
        <div className={styles.card}>
          {
  genreSongs.map((song) => <SongCard albumArtUrl={song.albumArtUrl} artists={song.artists} albumName={song.albumName} />)
  }
        </div>
      </div>
    </div>

  );
};

export default SongsList;
