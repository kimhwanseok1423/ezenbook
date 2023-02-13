package com.example.demo.backend_product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.backend_product.dao.ProductDAO;
import com.example.demo.backend_product.dto.ProductDTO;

@Service
public class ProductServiceImp  implements ProductService{
	@Autowired
	private ProductDAO productDAO;

	@Override
	public List<ProductDTO> search() throws Exception {
		// TODO Auto-generated method stub
		return productDAO.getProductList();
	}
	
	

}
