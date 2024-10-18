package com.webapp.apis.transaction.aop;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
@Aspect
@Component
public class CommonJoinPointConfig {
	
	@Pointcut("execution(* com.webapp.apis.transactions.controller.*.*(..))")
	public void controllerLayerExecution(){}
	
	@Pointcut("execution(* com.webapp.apis.transactions.service.impl.*.*(..))")
	public void serviceLayerExecution(){}
	
	
	/**
     * Pointcut that matches all repositories, services and Web REST endpoints.
     */
    @Pointcut("within(@org.springframework.stereotype.Repository *)" +
        " || within(@org.springframework.stereotype.Service *)" +
        " || within(@org.springframework.web.bind.annotation.RestController *)")
    public void springBeanPointcut() {
        // Method is empty as this is just a Pointcut, the implementations are in the advices.
    }

    /**
     * Pointcut that matches all Spring beans in the application's main packages.
     */
    @Pointcut("within(com.webapp.apis.transactions.repository..*)" +
        " || within(com.webapp.apis.transactions.service.impl..*)" +
        " || within(com.webapp.apis.transactions.controller..*)")
    public void applicationPackagePointcut() {
        // Method is empty as this is just a Pointcut, the implementations are in the advices.
    }


}