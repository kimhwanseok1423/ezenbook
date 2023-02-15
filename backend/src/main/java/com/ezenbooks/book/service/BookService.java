package com.ezenbooks.book.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.ezenbooks.book.dto.BookDTO;

@Service
public interface BookService {

	public List<BookDTO> search() throws Exception;
}
