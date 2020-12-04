const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "hev0cd5f1tkh55iy",
    password: "sonnytvqtkzyo6zg",
    database: "lqb35zmzsklz9n3m"
});

module.exports = pool;
