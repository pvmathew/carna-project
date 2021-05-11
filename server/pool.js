const { Pool } = require("pg");

const pool = new Pool({
  user: "pavinmathew",
  database: "carna",
});

module.exports = pool;

// const { Client } = require("pg");

// let pgConfig = process.env.DATABASE_URL
//   ? {
//       connectionString: process.env.DATABASE_URL,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     }
//   : {
//       user: "pavinmathew",
//       database: "carna",
//     };

// const client = new Client(pgConfig);

// client.connect();

// module.exports = client;