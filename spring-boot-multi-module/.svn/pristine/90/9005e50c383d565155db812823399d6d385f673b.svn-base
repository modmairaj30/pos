package com.webapp.apis.transaction.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class StockVerificationServiceAspect {

	@Before(value = "execution(* com.webapp.apis.transactions.service.impl.StockVerificationServiceImpl.getAllStockVerification(..))")
	public void beforeAdvice(JoinPoint joinPoint) {
		System.out.println("Before method:" + joinPoint.getSignature());
		// System.out.println("Creating StockVerificationServiceImpl with first name - "
		// + fname + ", second name - " + sname + " and id - " + empId);

	}
	
	@After(value = "execution(* com.webapp.apis.transactions.service.impl.StockVerificationServiceImpl.getAllStockVerification(..))")
	public void afterAdvice(JoinPoint joinPoint) {
		System.out.println("Before method:" + joinPoint.getSignature());
		// System.out.println("Creating StockVerificationServiceImpl with first name - "
		// + fname + ", second name - " + sname + " and id - " + empId);

	}
}
