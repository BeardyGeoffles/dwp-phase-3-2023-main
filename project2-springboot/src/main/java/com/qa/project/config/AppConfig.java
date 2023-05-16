package com.qa.project.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/*
 * This class AppConfig is used to configure beans that are used in the application. 
 * The class is annotated with @Configuration which is a Spring annotation and indicates 
 * that this class is a Spring configuration class. The class contains a single method 
 * getMapper() which is annotated with @Bean. This method returns a new instance of 
 * ModelMapper which is a library that is used to perform object-to-object mapping 
 * between Java classes. This annotation tells Spring to add this object to the 
 * application context, this allows objects in other parts of the application to use the 
 * ModelMapper instance without having to create their own. This way the application can 
 * use a single instance of ModelMapper throughout the application.
 */

@Configuration // indicates that this class is a Spring configuration class
public class AppConfig {

	@Bean // inversion of control, adds this to application context
	public ModelMapper getMapper() {
		return new ModelMapper();
	}

}
