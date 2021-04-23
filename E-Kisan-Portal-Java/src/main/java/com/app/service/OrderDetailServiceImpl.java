package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OrderDetailsRepository;
import com.app.entity.OrderDetails;


@Service
public class OrderDetailServiceImpl implements OrderDetailService {
	
	private OrderDetailsRepository orderRepository;
	
	@Autowired
	private OrderDetailServiceImpl(OrderDetailsRepository orderRepository) {
		this.orderRepository = orderRepository;
	}

	@Override
	public void saveOrderDetails(OrderDetails orderDetails) {
		// TODO Auto-generated method stub
		orderRepository.save(orderDetails);
	}

	@Override
	public List<OrderDetails> getOrderDetails() {
		// TODO Auto-generated method stub
		return orderRepository.findAll();
	}

	
	@Override
	public List<OrderDetails> getOrderDataByuserId(int userId) {
		// TODO Auto-generated method stub
        return orderRepository.getOrderDataByuserId(userId);
	}

	@Override
	public OrderDetails getOrderDataByOrderId(int orderId) {
		// TODO Auto-generated method stub
		return orderRepository.getOrderDataByOrderId(orderId);
	}

}
