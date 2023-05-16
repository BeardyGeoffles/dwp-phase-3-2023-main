package com.qa.project.business.dto;

import com.qa.project.persistence.domain.BuyerDomain;
import com.qa.project.persistence.domain.SellerDomain;
import com.qa.project.persistence.enums.StatusEnum;
import com.qa.project.persistence.enums.TypeEnum;

/*
 * This class PropertyDTO is used to represent an 'property' object in the application.
 * This class is a simple POJO (Plain Old Java Object) class that is used to hold data 
 * and transfer it between different layers of the application. It is also commonly 
 * known as a Data Transfer Object (DTO) and is used to transfer data between the 
 * different layers of the application.
 */

public class PropertyDTO {
	
	// private fields to hold information
	private Long id;
	private String address;
	private String postcode;
	private TypeEnum type;
	private Integer bedrooms;
	private Integer bathrooms;
	private Boolean garden;
	private Float price;
	private StatusEnum status;
	private SellerDomain seller;
	private BuyerDomain buyer;
	
	// default constructor
	public PropertyDTO() {
		super();
	}
	
	// no buyer constructor
	public PropertyDTO(Long id, String address, String postcode, TypeEnum type, Integer bedrooms, Integer bathrooms,
			Boolean garden, Float price, StatusEnum status, SellerDomain seller) {
		super();
		this.id = id;
		this.address = address;
		this.postcode = postcode;
		this.type = type;
		this.bedrooms = bedrooms;
		this.bathrooms = bathrooms;
		this.garden = garden;
		this.price = price;
		this.status = status;
		this.seller = seller;
	}
	
	// all arguments constructor
	public PropertyDTO(Long id, String address, String postcode, TypeEnum type, Integer bedrooms, Integer bathrooms,
			Boolean garden, Float price, StatusEnum status, SellerDomain seller, BuyerDomain buyer) {
		super();
		this.id = id;
		this.address = address;
		this.postcode = postcode;
		this.type = type;
		this.bedrooms = bedrooms;
		this.bathrooms = bathrooms;
		this.garden = garden;
		this.price = price;
		this.status = status;
		this.seller = seller;
		this.buyer = buyer;
	}
	
	// getters and setters for each of the fields
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public TypeEnum getType() {
		return type;
	}

	public void setType(TypeEnum type) {
		this.type = type;
	}

	public Integer getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(Integer bedrooms) {
		this.bedrooms = bedrooms;
	}

	public Integer getBathrooms() {
		return bathrooms;
	}

	public void setBathrooms(Integer bathrooms) {
		this.bathrooms = bathrooms;
	}

	public Boolean getGarden() {
		return garden;
	}

	public void setGarden(Boolean garden) {
		this.garden = garden;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public StatusEnum getStatus() {
		return status;
	}

	public void setStatus(StatusEnum status) {
		this.status = status;
	}

	public SellerDomain getSeller() {
		return seller;
	}

	public void setSeller(SellerDomain seller) {
		this.seller = seller;
	}

	public BuyerDomain getBuyer() {
		return buyer;
	}

	public void setBuyer(BuyerDomain buyer) {
		this.buyer = buyer;
	}
	
}
