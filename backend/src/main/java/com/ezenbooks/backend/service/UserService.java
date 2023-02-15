package com.ezenbooks.backend.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.ezenbooks.backend.dto.UserDTO;

@Service
public interface UserService {

	public List<UserDTO> userSearch() throws Exception;
}
