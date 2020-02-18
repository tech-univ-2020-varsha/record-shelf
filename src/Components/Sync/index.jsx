import React from 'react';
import Button from '../Button';
import * as styles from './index.module.css';

const Sync = () => {
  const syncButtonClick = () => {
    alert('clicked');
  };

  return (
    <div className={styles.sync}>
      <div className={styles.syncBtn}>
        <Button buttonOnClick={syncButtonClick}> sync</Button>
      </div>

    </div>
  );
};

export default Sync;
