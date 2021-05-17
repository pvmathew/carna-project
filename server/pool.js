// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "pavinmathew",
//   database: "carna",
// });

// module.exports = pool;

const { Client } = require('pg');

let pgConfig =
  'postgres://vcqeyohi:lcPXP7-3gMYUop-KeuDMt18L97wDSqmW@arjuna.db.elephantsql.com:5432/vcqeyohi'
    ? {
        connectionString:
          'postgres://vcqeyohi:lcPXP7-3gMYUop-KeuDMt18L97wDSqmW@arjuna.db.elephantsql.com:5432/vcqeyohi',
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        user: 'pvmathew',
        database: 'vcqeyohi',
      };

const client = new Client(pgConfig);

client.connect();

module.exports = client;
