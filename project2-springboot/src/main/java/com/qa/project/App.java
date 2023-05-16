package com.qa.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// this annotation is used to mark the class as a configuration class and a spring boot application
@SpringBootApplication
public class App {
	
	// this is the main method that is run when the application starts
	public static void main(String[] args) {
		// this method call is used to start the spring application
		SpringApplication.run(App.class, args);
	}

}