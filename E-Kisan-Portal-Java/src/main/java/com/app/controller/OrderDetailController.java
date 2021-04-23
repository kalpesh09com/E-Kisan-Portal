package com.app.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.OrderDetails;


import com.app.service.OrderDetailService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrderDetailController {

	private OrderDetailService orderDetailService;
	
//	@Autowired
//	private EmailServiceImpl emaildata;

	@Autowired
	public OrderDetailController(OrderDetailService orderDetailService) {
		this.orderDetailService = orderDetailService;
	}

	@PostMapping("/saveOrderDetails")
	public OrderDetails saveOrderDetails(@RequestBody OrderDetails orderDetails) {
		orderDetailService.saveOrderDetails(orderDetails);
		
		//emaildata.sendSimpleMessage(theUser.getEmailId(), "E-KisanPortal Order Confirmation", "Your order has been placed");
		
		return orderDetails;
	}

	@GetMapping("/getOrderDetails")
	public List<OrderDetails> getOrderDetails() {
		return orderDetailService.getOrderDetails();
	}

	@GetMapping("/getOrderDataByuserId/{userId}")
	public List<OrderDetails> getOrderDataByuserId(@PathVariable int userId) {
		return orderDetailService.getOrderDataByuserId(userId);
	}
	
	@GetMapping("/getOrderDataByOrderId/{orderId}")
	public OrderDetails getOrderDataByOrderId(@PathVariable int orderId) {
		return orderDetailService.getOrderDataByOrderId(orderId);
	}
	
	@PutMapping("/updateOrderDetailsById/{orderId}")
	public 	OrderDetails updateOrderDetails(@PathVariable("orderId") int orderId, @RequestBody OrderDetails orderdetails) {
		OrderDetails temProduct = orderDetailService.getOrderDataByOrderId(orderId);
		
		if (temProduct == null) {
			throw new RuntimeException("User Not Found");
		}
		
		temProduct.setStatus(orderdetails.getStatus());	

		
		orderDetailService.saveOrderDetails(temProduct);
		return temProduct;
	}
}