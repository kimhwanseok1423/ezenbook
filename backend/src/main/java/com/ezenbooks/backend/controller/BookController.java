package com.ezenbooks.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ezenbooks.backend.dto.BookDTO;
import com.ezenbooks.backend.service.BookService;

//http://localhost:8090/booklist

@CrossOrigin("*") //포트번호에 관계없이 응답을 허가해주는 어노테이션
//@CrossOrigin(origins = {"http://localhost:3000"}) //특정 url에만 허가하는 방법
@RestController //= @Controller + @ResponseBody
//@Controller
public class BookController {

		@Autowired
		private BookService bookService;
		
		public BookController() {
		} //end BookController
		
		//http://localhost:8090/booklist
		@GetMapping("/booklist")
		public List<BookDTO> getBookList() throws Exception{
			return bookService.bookSearch();
			}//end getBookList()
			
			//http://localhost:8090/category
			@GetMapping("/category")
			public List<BookDTO> getCategoryList() throws Exception{
				return bookService.bookSearch();
				} //end getCategoryList
				

}//end class
