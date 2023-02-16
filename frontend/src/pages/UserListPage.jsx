import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';
import '../css/admin.css';

const UserListPage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    await axios
      .get(baseUrl + '/userlist')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('setUser added');
  }

  return (
    <div className='UserPage-Wrap container-fluid col-xl-12 col-lg-12 mt-3'>
      <div className='row'>
        <div className='card'>
          <table className='table' id='user-title'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                {/* <th scope='col' className='user_num'>
                  User No.
                </th> */}

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
                <th scope='col' className='create_date'>
                  가입일
                </th>
                <th scope='col' className='modify_date'>
                  수정일
                </th>
                <th scope='col' className='user-modify'>
                  Modify
                </th>
                <th scope='col' className='user-delete'>
                  Delete
                </th>
              </tr>
            </thead>
          </table>
          {user.map((user) => {
            return (
              <div key={user.user_id}>
                <table className='user_data'>
                  <tbody>
                    <tr>
                      <th scope='row'>{user.user_num}</th>
                      <td className='user_id'>{user.user_id}</td>
                      <td className='user_name'>{user.user_name}</td>
                      <td className='user_email'>{user.user_email}</td>
                      <td className='user_nickname'>{user.user_nickname}</td>
                      <td className='user_role'>{user.user_role}</td>
                      <td className='create_date'>22/02/17</td>
                      <td className='modify_date'>22/12/29</td>
                      <td className='user_modify'>수정</td>
                      <td className='user_delete'>삭제</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};
export default UserListPage;
