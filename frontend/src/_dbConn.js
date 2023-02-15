import { getConnection } from 'oracledb';
var config = {
  user: 'ezenbooks',
  password: 'a1234',
  connectString: 'localhost:1521/xe',
};

getConnection(config, (err, conn) => {
  todoWork(err, conn);
});

function todoWork(err, connection) {
  if (err) {
    console.error(err.message);
    return;
  }
  connection.execute('select * from user', [], function (err, result) {
    if (err) {
      console.error(err.message);
      doRelease(connection);
      return;
    }
    console.log(result.metaData); //테이블 스키마
    console.log(result.rows); //데이터
    doRelease(connection);
  });
}

function doRelease(connection) {
  connection.release(function (err) {
    if (err) {
      console.error(err.message);
    }
  });
}
