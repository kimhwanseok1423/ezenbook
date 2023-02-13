
package com.example.demo.backend_product.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.backend_product.dto.ProductDTO;
@Service
public interface ProductService {
public List<ProductDTO> search() throws Exception;
}
