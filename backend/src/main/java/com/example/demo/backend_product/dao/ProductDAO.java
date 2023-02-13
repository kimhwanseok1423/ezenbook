package com.example.demo.backend_product.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.backend_product.dto.ProductDTO;

@Mapper
@Repository
public interface ProductDAO {
public List<ProductDTO> getProductList() throws Exception;
}
