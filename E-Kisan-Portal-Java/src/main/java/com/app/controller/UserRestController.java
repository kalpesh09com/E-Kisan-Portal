package com.app.controller;

import java.util.List;


import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.User;

import com.app.service.UserService;

	@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserRestController {
	

	private UserService userService;
	
	
//	@Autowired
//	private EmailServiceImpl emaildata;
	
	//Dependency injection for 	user service (constructor injection)
	@Autowired
	public UserRestController(UserService userService) {
		this.userService = userService;
	}
	
	
	//Adding User Data into database
	@PostMapping("/addUser")
	public User register(@RequestBody User theUser) throws MessagingException {

		theUser.setId(0);
		
		System.out.println(theUser);
		String phone = theUser.getPhoneNumber();

		User tempUser = userService.findByPhoneNo(phone);
	
		// getting user from database if user found then registration will not be done
		if (tempUser != null) {
			throw new RuntimeException("Phone Number is already register");
		}

		userService.addUser(theUser);
		
	//	emaildata.sendSimpleMessage(theUser.getEmailId(), "E-KisanPortal Registration", "You have successfully registered");
		
		return theUser;
	}

	
	//Getting data from table
	@GetMapping("/getUser")
	public List<User> getUserData() {
		return userService.getAllUser();
	}
	
	
	//GEt data in id from table
	@GetMapping("/getUserById/{userId}")
	public User getUserDataById(@PathVariable int userId) {
		//return bookService.;
		return userService.getuserDataById(userId);
	}
	
	@GetMapping("/getAdminByMobileData/{phoneNumber}")
	public User getAdminDataByMobileNumber(@PathVariable String phoneNumber) {
		//return bookService.;
		return userService.getAdminDataByMobileNumber(phoneNumber);
	}
	
	
	//delete user data by id
	@DeleteMapping("deleteUserById/{userId}")
	public String deleteUserDataById(@PathVariable int userId) {
		//return bookService.;
		 userService.deleteUserDataById(userId);
		 return "Record deleted Successfully!!!";
				 
	}
	
	
	//update user for given id
	

	//to change the password
	@PutMapping("/updateUserById/{id}")
	public User updateUserDataById(@RequestBody User theUser  , @PathVariable int id ) {
		
		//first check if user of given phone number and email is present or not 
		//if user is present in database then only change the password for that user
		//otherwise throw exception that user not found
		User tempUser = userService.getuserDataById(id);
		
		
//		// getting user from database if user found then registration wont be done
		if (tempUser == null) {
			throw new RuntimeException("User Not Found");
		}
			
			//setting the new Password for User

			tempUser.setName(theUser.getName());
			tempUser.setEmailId(theUser.getEmailId());
			tempUser.setPhoneNumber(theUser.getPhoneNumber());
			tempUser.setAddress(theUser.getAddress());
			tempUser.setPincode(theUser.getPincode());
			tempUser.setState(theUser.getState());
			tempUser.setCity(theUser.getCity());
			tempUser.setAdharNumber(theUser.getAdharNumber());
			tempUser.setPassword(theUser.getPassword());
			tempUser.setDob(theUser.getDob());
			tempUser.setCountry(theUser.getCountry());
			tempUser.setRoleId(theUser.getRoleId());
			tempUser.setStatus(theUser.getStatus());
			tempUser.setImage(theUser.getImage());
			
			userService.addUser(tempUser);
		
		return tempUser;
	}
	

	//for login
	@PostMapping("/login")
	public User loginUser(@RequestBody User theUser) {

		theUser.setId(0);
		
		String phone = theUser.getPhoneNumber();
		String pass = theUser.getPassword();

		User tempUser = userService.findByPhoneNoAndPassword(phone, pass);

		
		// getting user from database if user found then registration wont be done
		if (tempUser == null) {
			throw new RuntimeException("User Not Found");
		}
		return tempUser;
	}
	
	
	
	//to change the password
	@PostMapping("/changePassword")
	public User changePassword(@RequestBody User theUser) {
		theUser.setId(0);
		String password = theUser.getPassword();
		String phone = theUser.getPhoneNumber();
		String email = theUser.getEmailId();
		
		//first check if user of given phone number and email is present or not 
		//if user is present in database then only change the password for that user
		//otherwise throw exception that user not found
		
		User tempUser = userService.findByPhoneNoAndEmail(phone, email);
		
		// getting user from database if user found then registration wont be done
		if (tempUser == null) {
			throw new RuntimeException("User Not Found");
		}else {	
			//setting the new Password for User
			tempUser.setPassword(password);
			userService.addUser(tempUser);
		}
		return tempUser;
	}
}
