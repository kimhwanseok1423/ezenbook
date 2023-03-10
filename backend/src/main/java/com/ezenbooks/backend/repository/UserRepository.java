package com.ezenbooks.backend.repository;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import com.ezenbooks.backend.dto.UserDTO;

@Repository
@Mapper
public interface UserRepository {
	// 회원가입
	void saveUser(UserDTO userDTO);

	// 로그인
	UserDTO getUserAccount(String username);

	// 아이디 중복체크
	public int getUserName(UserDTO userDTO) throws Exception;

	// 닉네임 중복체크
	public int getUserNick(UserDTO userDTO) throws Exception;
	public int nickUserid(UserDTO userDTO) throws Exception;
	
	// 이메일 중복체크
	public int getUserEmail(UserDTO userDTO) throws Exception;
	public int emailUserid(UserDTO userDTO) throws Exception;
	
	// 정보수정
	public int updateUser(UserDTO userDTO) throws Exception;

	// 회원탈퇴
	public int deleteUser(UserDTO userDTO) throws Exception;
}
