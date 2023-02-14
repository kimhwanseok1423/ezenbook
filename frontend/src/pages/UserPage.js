import '../css/test.css';

const UserPage = () => {
  return (
    <div className='UserPage-Wrap container-fluid'>
      <div class='row'>
        <div class='card'>
          {/* Default Table */}
          <table class='table' id='user-table'>
            <thead>
              <tr>
                <th scope='col' className='user_num'>
                  #
                </th>
                <th scope='col' className='user_id'>
                  ID
                </th>
                <th scope='col' className='user_name'>
                  Name
                </th>
                <th scope='col' className='user_email'>
                  Email
                </th>
                <th scope='col' className='user_nickname'>
                  Nickname
                </th>
                <th scope='col' className='user_role'>
                  Level
                </th>
                <th scope='col' className='user_id'>
                  Create Date
                </th>
                <th scope='col' className='modify_date'>
                  Modify Date
                </th>
                <th scope='col'>Modify</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>abcdefg</td>
                <td>정다운</td>
                <td>abcdefg@naver.com</td>
                <td>정다운</td>
                <td>관리자</td>
                <td>23/02/14</td>
                <td>23/02/14</td>
                <td>수정</td>
                <td>삭제</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>abcdefg</td>
                <td>정다운</td>
                <td>abcdefg@naver.com</td>
                <td>정다운</td>
                <td>관리자</td>
                <td>23/02/14</td>
                <td>23/02/14</td>
                <td>수정</td>
                <td>삭제</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>abcdefg</td>
                <td>정다운</td>
                <td>abcdefg@naver.com</td>
                <td>정다운</td>
                <td>관리자</td>
                <td>23/02/14</td>
                <td>23/02/14</td>
                <td>수정</td>
                <td>삭제</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>abcdefg</td>
                <td>정다운</td>
                <td>abcdefg@naver.com</td>
                <td>정다운</td>
                <td>관리자</td>
                <td>23/02/14</td>
                <td>23/02/14</td>
                <td>수정</td>
                <td>삭제</td>
              </tr>
            </tbody>
          </table>
          {/* End Default Table Example */}
        </div>
      </div>
    </div>
  );
};
export default UserPage;
