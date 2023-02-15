import '../css/admin.css';

const UserPage = () => {
  var rows = document.getElementsByClassName('view'); // view 라는 classname의 모든 element들 가져오기.
  var i;

  for (i = 0; i < rows.length; i++) {
    //elements를 for문으로 돌려서 각행에 클릭 리스너 등록.
    rows[i].addEventListener('click', function () {
      var content = this.nextElementSibling;
      //display:table-row는 요소를 표 내의 행처럼 보이게한다.
      if (content.style.display === 'table-row') {
        content.style.display = 'none';
      } else {
        content.style.display = 'table-row';
      }
    }); //click event
  } //for문

  return (
    <div className='UserPage-Wrap container-fluid col-xl-12 col-lg-12 mt-2'>
      <div class='row'>
        <div class='card'>
          {/* Default Table */}
          <table class='table' id='user-table'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                <th scope='col' className='user_num'>
                  User No.
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
            {/* 반복부분 */}
            <tbody>
              <tr className='view'>
                <th scope='row' className='user_data'>
                  E000000001
                </th>
                <td className='user_id'>AAAAAAAAAAAA</td>
                <td className='user_name'>김석진김석진</td>
                <td className='user_email'>
                  bts123456789ksj123456789@naver.com
                </td>
                <td className='user_nickname'>방탄소년단김석진</td>
                <td className='user_role'>New</td>
                <td className='create_date'>22/02/17</td>
                <td className='modify_date'>22/12/29</td>
                <td className='user-modify'>수정</td>
                <td className='user-delete'>삭제</td>
              </tr>
              <tr class='fold'>
                <td colSpan={10}>
                  유저 상세내용 표시 예정 ex) 구매액 합계, 배송 주소 등등
                </td>
              </tr>
              <tr className='view'>
                <th scope='row' className='user_data'>
                  E000000001
                </th>
                <td className='user_id'>AAAAAAAAAAAA</td>
                <td className='user_name'>김석진김석진</td>
                <td className='user_email'>
                  bts123456789ksj123456789@naver.com
                </td>
                <td className='user_nickname'>방탄소년단김석진</td>
                <td className='user_role'>New</td>
                <td className='create_date'>22/02/17</td>
                <td className='modify_date'>22/12/29</td>
                <td className='user-modify'>수정</td>
                <td className='user-delete'>삭제</td>
              </tr>
              <tr class='fold'>
                <td colSpan={10}>
                  <h4>김석진 상세 정보</h4>
                  <table>
                    <td>
                      유저 상세내용 표시 예정 ex) 구매액 합계, 배송 주소 등등
                    </td>
                  </table>
                </td>
              </tr>
              <tr className='view'>
                <th scope='row' className='user_data'>
                  E000000001
                </th>
                <td className='user_id'>AAAAAAAAAAAA</td>
                <td className='user_name'>김석진김석진</td>
                <td className='user_email'>
                  bts123456789ksj123456789@naver.com
                </td>
                <td className='user_nickname'>방탄소년단김석진</td>
                <td className='user_role'>New</td>
                <td className='create_date'>22/02/17</td>
                <td className='modify_date'>22/12/29</td>
                <td className='user-modify'>수정</td>
                <td className='user-delete'>삭제</td>
              </tr>
              <tr class='fold'>
                <td colSpan={10}>
                  유저 상세내용 표시 예정 ex) 구매액 합계, 배송 주소 등등
                </td>
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
