import { autoCommit, getConnection } from 'oracledb';
import {
  user as _user,
  password as _password,a
  connectString as _connectString,
} from '../config/dbConfig';
// Express 기본 모듈 불러오기
import express, { Router } from 'express';
import { createServer } from 'http';
import path from 'path';

// 익스프레스 객체 생성
const app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser
import { urlencoded, json } from 'body-parser';

app.use(urlencoded({ extended: true }));
app.use(json());

// 라우터 객체 참조
const router = Router();

// Oracle Auto Commit 설정
autoCommit = true;

// 데이터 조회 처리
router.post('/dbTestSelect', function (request, response) {
  getConnection(
    {
      user: _user,
      password: _password,
      connectString: _connectString,
    },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      let query = 'select * ' + '   from emp';

      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows); // 데이터
        doRelease(connection, result.rows); // Connection 해제
      });
    }
  );

  // DB 연결 해제
  function doRelease(connection, rowList) {
    connection.release(function (err) {
      if (err) {
        console.error(err.message);
      }

      // DB종료까지 모두 완료되었을 시 응답 데이터 반환
      console.log('list size: ' + rowList.length);

      response.send(rowList);
    });
  }
});

// 데이터 입력 처리
router.post('/dbTestInsert', function (request, response) {
  getConnection(
    {
      user: _user,
      password: _password,
      connectString: _connectString,
    },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      // PrepareStatement 구조
      let query =
        'INSERT INTO EMP( EMPNO ,ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO) ' +
        'VALUES( :EMPNO ,:ENAME, :JOB, :MGR, SYSDATE, :SAL, :COMM, :DEPTNO )';

      let binddata = [
        Number(request.body.empno),
        request.body.ename,
        request.body.job,
        request.body.mgr,
        Number(request.body.sal),
        Number(request.body.comm),
        Number(request.body.deptno),
      ];

      connection.execute(query, binddata, function (err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log('Row Insert: ' + result.rowsAffected);

        doRelease(connection, result.rowsAffected); // Connection 해제
      });
    }
  );

  // DB 연결 해제
  function doRelease(connection, result) {
    connection.release(function (err) {
      if (err) {
        console.error(err.message);
      }

      // DB종료까지 모두 완료되었을 시 응답 데이터 반환
      response.send('' + result);
    });
  }
});

// 라우터 객체를 app 객체에 등록
app.use('/', router);

// 등록되지 않은 패스에 대해 페이지 오류 응답
app.all('*', function (req, res) {
  res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

// Express 서버 시작
createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
