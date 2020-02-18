import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../Button';
import * as styles from './index.module.css';
import segregateData from '../../utils/segregateData';

const Sync = () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIzYTRmZTQyLTU0ZTgtNDk2My1hZjViLTBlNTBmOTBjNDRiMyIsIm5iZiI6MTU4MTk5ODYxMSwiZXhwIjoxNTgyMDg1MDExLCJpYXQiOjE1ODE5OTg2MTEsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.iZSARc8zG1MftPyPFUcW15C3vs4PH0ZED9mWWi2D9Xw';

  const recordsURL = '/api/records';
  const syncButtonClick = async () => {
    const result = await Axios.get(recordsURL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });

    const rockData = await segregateData(result.data.data, 'rock');
    localStorage.setItem('rock', JSON.stringify(rockData));
    const popData = await segregateData(result.data.data, 'pop');
    localStorage.setItem('pop', JSON.stringify(popData));
    const bollywoodData = await segregateData(result.data.data, 'bollywood');
    localStorage.setItem('bollywood', JSON.stringify(bollywoodData));
    const countryData = await segregateData(result.data.data, 'country');
    localStorage.setItem('country', JSON.stringify(countryData));
  };

  return (
    <div className={styles.sync}>
      <div className={styles.syncBtn}>
        <Link to="/genres">
          <Button buttonOnClick={syncButtonClick}> sync</Button>
        </Link>
      </div>

    </div>
  );
};

export default Sync;
