package com.ezenbooks.backend.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.ezenbooks.backend.dto.BookDTO;

@Service
public interface BookService {

	public List<BookDTO> bookSearch() throws Exception;

}
