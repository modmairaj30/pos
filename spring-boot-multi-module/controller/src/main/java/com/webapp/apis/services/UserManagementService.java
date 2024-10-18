package com.webapp.apis.services;

import java.util.Map;

import com.webapp.apis.domian.Operation;

public interface UserManagementService {
	public Map<String, Operation> getAllScreensAndOperationOfUser(Integer role_id);
}
