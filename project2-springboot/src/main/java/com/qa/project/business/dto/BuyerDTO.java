package com.qa.project.business.dto;

/*
 * This class BuyerDTO is used to represent an 'buyer' object in the application.
 * This class is a simple POJO (Plain Old Java Object) class that is used to hold data 
 * and transfer it between different layers of the application. It is also commonly 
 * known as a Data Transfer Object (DTO) and is used to transfer data between the 
 * different layers of the application.
 */

public class BuyerDTO{
	
	// private fields to hold information
	private Long id;
	private String firstName;
	private String surname;
	private String address;
	private String postcode;
	private String phone;
	
	// default constructor
	public BuyerDTO() {
		super();
	}
	
	// all arguments constructor
	public BuyerDTO(Long id, String firstName, String surname, String address, String postcode, String phone) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.surname = surname;
		this.address = address;
		this.postcode = postcode;
		this.phone = phone;
	}

	// getters and setters for each of the fields
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPostcode() {
		return postcode;
	}

	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}
