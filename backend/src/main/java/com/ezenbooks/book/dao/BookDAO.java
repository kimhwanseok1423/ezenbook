package com.ezenbooks.book.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.ezenbooks.book.dto.BookDTO;

@Mapper
@Repository
public interface BookDAO {

	public List<BookDTO> getBookList() throws Exception;
}
