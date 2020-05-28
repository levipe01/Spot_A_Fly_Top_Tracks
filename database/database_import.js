/* eslint-disable no-console */
const path = require('path');
const db = require('./index.js');

const createSongsTable = () => {
  const sqlString = 'CREATE TABLE songs (id serial PRIMARY KEY, name VARCHAR (200), artist VARCHAR (200), artistid INTEGER, image VARCHAR (200), playcount INTEGER, length VARCHAR (10))';

  return db.query('DROP TABLE IF EXISTS songs')
    .then(() => db.query(sqlString));
};

const seedDB = () => {
  const pathToCSV = path.resolve(__dirname, './seed.txt');
  const sqlString = `COPY songs(name,artist,artistid,image,playCount,length) FROM '${pathToCSV}' DELIMITER ',' CSV HEADER`;

  return db.query(sqlString);
};

const indexArtistId = () => {
  const sqlString = 'CREATE INDEX artistId_index ON songs(artistid)';

  return db.query(sqlString);
};

createSongsTable()
  .then(() => console.log('Table created'))
  .then(seedDB)
  .then(() => console.log('Records imported'))
  .then(indexArtistId)
  .catch(console.log);
