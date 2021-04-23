package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.app.entity.User;
import com.app.dao.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	private UserRepo repo;

	public UserServiceImpl(UserRepo repo) {

		this.repo = repo;
	}

	@Override
	public void addUser(User theUser) {
		// TODO Auto-generated method stub
		repo.save(theUser);
	}

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public User findByPhoneNo(String phoneNumber) {
		// TODO Auto-generated method stub
		return repo.findByPhoneNumber(phoneNumber);
	}

	@Override
	public User findByPhoneNoAndPassword(String phoneNumber, String password) {
		// TODO Auto-generated method stub
		return repo.findByPhoneNumberAndPassword(phoneNumber, password);
	}

	@Override
	public User getuserDataById(int userId) {
		// TODO Auto-generated method stub
		Optional<User> result = repo.findById(userId);

		User theUser = null;
		if (result.isPresent()) {
			theUser = result.get();
		} else {
			// we did not find the user
			throw new RuntimeException("Did not find User = " + userId);
		}
		return theUser;
	}

	@Override
	public User findByPhoneNoAndEmail(String phoneNumber, String emailId) {
		// TODO Auto-generated method stub
		return repo.findByPhoneNumberAndEmailId(phoneNumber, emailId);
	}

	@Override
	public void  deleteUserDataById(int userId) {
		// TODO Auto-generated method stub
		 repo.deleteById(userId);
	}

	@Override
	public User getAdminDataByMobileNumber(String phoneNumber) {
			
		return repo.findByPhoneNumber(phoneNumber);
	}
}
