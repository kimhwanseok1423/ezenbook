const oracledb = require('oracledb');

oracledb.getConnection(
  {
    user: 'ezenbooks',
    password: 'a1234',
    host: 'localhost',
    database: 'xe',
  },
  function (err, conn) {
    if (err) {
      console.log('접속 실패', err);
      return;
    }
    console.log('접속 성공');
  }
);
