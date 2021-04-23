package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.MyCart;

public interface MyCartRepository extends JpaRepository<MyCart,Integer>{

	List<MyCart> findByUserId(int userId);



}
