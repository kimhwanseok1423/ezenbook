import express from 'express';
const app = express();

const server = app.listen(3000, () => {
  console.log('server start, port 3000');
});

import { outFormat, OUT_FORMAT_OBJECT, getConnection } from 'oracledb';
outFormat = OUT_FORMAT_OBJECT;

app.get('/select', function (request, response) {
  getSelect(request, response);
});

async function getSelect(request, response) {
  let connection;
  try {
    connection = await getConnection({
      user: 'ezenbooks',
      password: 'a1234',
      connectString: 'localhost:1521/xe',
    });

    const result = await connection.execute(
      `SELECT * 
            FROM BOOKS
            WHERE BOOK_NUM = :1`,
      [1] // num의 값 전달
    );

    console.log(result);
    response.send(result.rows);
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
