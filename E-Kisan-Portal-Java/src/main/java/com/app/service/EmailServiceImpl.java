//package com.app.service;
//
//import javax.mail.MessagingException;
//import javax.mail.internet.MimeMessage;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//
//import org.springframework.stereotype.Service;
//
//
//@Service
//public class EmailServiceImpl implements EmailService {
//	
//	
//	 public JavaMailSender emailSender;
//	 
//	 @Autowired
//	public EmailServiceImpl(JavaMailSender emailSender) {
//		 
//		this.emailSender = emailSender; 
//	}
//	 
//	 
//	@Override
//	 public void sendSimpleMessage(String to, String sub, String msg) throws MessagingException {
//	        	
//		 System.out.println("in send mail");
//		 
//		 System.out.println(to + sub +  msg);
//		 
//		 MimeMessage mimemsg =  emailSender.createMimeMessage();	
//		 
//		 MimeMessageHelper mimeMsgHelper =  new MimeMessageHelper(mimemsg); 
//		 	
////	          SimpleMailMessage message = new SimpleMailMessage(); 
////	     	 System.out.println("in send mail 1 ");
////	          message.setFrom("omkar.tonde0@gmail.com"); 
////	          
////	     	 System.out.println("in send mail 2 ");
////	          message.setTo(to); 
////	          message.setSubject(sub); 
////	          message.setText(msg);
////	          
////	     	 System.out.println("in send mail 3 ");
////	          emailSender.send(message);
////	     	 System.out.println("in send mail 4 ");
//		 
//		
//		 
//		 mimeMsgHelper.setFrom("omkar.tonde0@gmail.com"); 
//		 mimeMsgHelper.setTo(to); 
//		 mimeMsgHelper.setSubject(sub); 
//		 mimeMsgHelper.setText(msg);
//		 emailSender.send(mimemsg);
//		 
//	}
//
//
//	
//
//}
