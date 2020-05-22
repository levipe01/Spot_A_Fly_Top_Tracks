const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'toptracks',
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
