package com.ezenbooks.book.dto;

import lombok.Data;

@Data
public class BookDTO {
	private int book_num;
	private int category_code;
	private String book_title;
	private String book_author;
	private String book_image;
	private int book_price;
	private String book_publisher;
	private String book_pubdate;
}
