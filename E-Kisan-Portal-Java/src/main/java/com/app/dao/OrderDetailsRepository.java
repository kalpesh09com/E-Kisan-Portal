package com.app.dao;

import com.app.entity.OrderDetails;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {
	public List<OrderDetails> getOrderDataByuserId(int userId);

	public OrderDetails getOrderDataByOrderId(int orderId);
}
