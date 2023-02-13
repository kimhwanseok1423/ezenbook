package com.example.demo.backend_todolist.dto;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import ch.qos.logback.core.joran.spi.NoAutoStart;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
/*@Data: @GETTER,@SETTER,@Tostring,@EqualAndHashCode, @RequestedArgusConstructor 을 합쳐 놓은 어노테이션이다.
 * 
 *  component   레이어 계층에 봤을떄 특정한 의미가없는 클래스들 일떄 선언
 */ 
@Component
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
//@Data
@ToString

public class TodoDTO {
   private int id;
   private int completed;
   private String todoname;
   
   
}
