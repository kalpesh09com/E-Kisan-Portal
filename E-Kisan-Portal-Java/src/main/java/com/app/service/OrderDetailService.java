
package com.app.service;

import java.util.List;

import com.app.entity.OrderDetails;

public interface OrderDetailService {

	public void saveOrderDetails(OrderDetails orderDetails);

	public List<OrderDetails> getOrderDetails();

	public List<OrderDetails> getOrderDataByuserId(int userId);

	public OrderDetails getOrderDataByOrderId(int orderId);
}
