const segregateData = (recordsData, type) => {
  const recordData = [];
  recordsData.map((data) => {
    if (data.genres.includes(type)) {
      recordData.push({
        id: data.id, albumArtUrl: data.albumArtUrl, artists: data.artists, albumName: data.albumName,
      });
    }
    // localStorage.setItem('rock', JSON.stringify(rockData));
  });
  console.log(recordData);
  return recordData;
};

export default segregateData;
