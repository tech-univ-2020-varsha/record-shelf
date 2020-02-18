import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../Button';
import * as styles from './index.module.css';
import useRecord from '../../hooks/useRecord';

const Sync = () => {
  const [rockData, popData, bollywoodData, countryData, done] = useRecord();
  if (!done) { return (<div>Loading!...</div>); }
  return (
    <div className={styles.sync}>
      <div>
        {' '}
        :((
        <br />
        seems a bit empty in here...
      </div>
      <div className={styles.syncBtn}>
        {
            done === true
              ? (
                <Link to={{
                  pathname: '/genres',
                  state: {
                    rockData, popData, bollywoodData, countryData,
                  },
                }}
                >
                  <Button> sync</Button>
                </Link>
              ) : <Button> sync</Button>

        }


      </div>

    </div>
  );
};

export default Sync;
