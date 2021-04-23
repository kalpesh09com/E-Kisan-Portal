package com.app.service;

import java.util.List;

import com.app.entity.User;

public interface UserService {
	

	public void addUser(User theUser);

	public List<User> getAllUser();

	public User findByPhoneNo(String phoneNumber);

	public User findByPhoneNoAndPassword(String phoneNumber, String password);

	public User getuserDataById(int userId);

	public User findByPhoneNoAndEmail(String phoneNumber, String emailId);

	public void deleteUserDataById(int userId);

	public User getAdminDataByMobileNumber(String phoneNumber) ;
}
