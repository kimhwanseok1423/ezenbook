package com.ezenbooks.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController = @Controller + @ResponseBody
@CrossOrigin("*") //포트번호에 관계없이 응답을 허가해주는 어노테이션
//@RestController = @Controller + @ResponseBody

//http://localhost:8090/index
@RequestMapping("/index")
@RestController
public class MainController {
	
	public MainController() {
		System.out.println("Main controller Called");
	} // End Main Controller
	
}
