-- review 테이블에 rating column 추가
alter table BOOK_REVIEW add review_rating  number(3);

-- review 테이블에 user_id column 추가
alter table BOOK_REVIEW
    add user_id NUMBER not null; 

-- review 테이블의 user_id를 foreign key로 설정
alter table BOOK_REVIEW
    add constraint "BOOK_REVIEW_USERS_FK"
        foreign key (user_id) references USERS;
        
        -- book_title 크기 변경
alter table BOOKS
    modify BOOK_TITLE VARCHAR2(200);

-- book_author 크기 변경
alter table BOOKS
    modify BOOK_AUTHOR VARCHAR2(100);
    
commit;