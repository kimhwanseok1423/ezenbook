package com.example.demo.backend_product.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.backend_product.dto.ProductDTO;
import com.example.demo.backend_product.service.ProductService;

@CrossOrigin("*")
@RestController
public class ProductController {
@Autowired
private ProductService productservice;

public ProductController() {
	// TODO Auto-generated constructor stub
}
@ResponseBody
@GetMapping("/product/all")
public List<ProductDTO> getList() throws Exception{
	return productservice.search();
}
@RequestMapping("/product/{id}")
public ProductDTO listMethod(@PathVariable("id") int id){
	return productservice.search(id);
	
	
}
}
