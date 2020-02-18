import { useState, useEffect } from 'react';
import Axios from 'axios';
import segregateData from '../utils/segregateData';
import token from '../constants/index';
import result from '../records';


const useRecord = () => {
  const recordsURL = '/api/records';
  const [rockData, setRockData] = useState([]);
  const [popData, setPopData] = useState([]);
  const [bollywoodData, setBollywoodData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const getData = async () => {
    //   const result = await Axios.get(recordsURL, {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });

      setRockData(segregateData(result.data, 'rock'));
      setPopData(segregateData(result.data, 'pop'));
      setBollywoodData(segregateData(result.data, 'bollywood'));
      setCountryData(segregateData(result.data, 'country'));
      setDone(true);
    };
    getData();
  }, []);
  return [rockData, popData, bollywoodData, countryData, done];
};

export default useRecord;
