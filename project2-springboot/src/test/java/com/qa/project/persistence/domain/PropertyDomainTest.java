package com.qa.project.persistence.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.qa.project.persistence.enums.StatusEnum;
import com.qa.project.persistence.enums.TypeEnum;

@ExtendWith(MockitoExtension.class)
public class PropertyDomainTest {

	// mocking the seller and buyer domain objects
	@Mock
	private SellerDomain mockSeller;
	@Mock
	private BuyerDomain mockBuyer;

	private PropertyDomain property;
	private PropertyDomain propertyWithBuyer;
	private Long id = 1L;
	private String address = "123 Main St";
	private String postcode = "12345";
	private TypeEnum type = TypeEnum.APARTMENT;
	private Integer bedrooms = 3;
	private Integer bathrooms = 2;
	private Boolean garden = true;
	private Float price = (float) 300000.00;
	private StatusEnum status = StatusEnum.FORSALE;

	@BeforeEach
	public void setUp() {
        // Create a new PropertyDomain object before each test
		property = new PropertyDomain(id, address, postcode, type, bedrooms, bathrooms, garden, price, status,
				mockSeller);
        // Create a new PropertyDomain object which includes a buyer before each test
		propertyWithBuyer = new PropertyDomain(id, address, postcode, type, bedrooms, bathrooms, garden, price, status,
				mockSeller, mockBuyer);
	}

	@Test
	public void testDefaultConstructor() {
		// creating an instance using default constructor
		PropertyDomain defaultProperty = new PropertyDomain();
		// checking if the instance is not null
		assertNotNull(defaultProperty);
	}

	@Test
	public void testNoBuyerConstructor() {
		// checking if the instance is not null
		assertNotNull(property);
		// checking if the values of the instance match the expected values
		assertEquals(id, property.getId());
		assertEquals(address, property.getAddress());
		assertEquals(postcode, property.getPostcode());
		assertEquals(type, property.getType());
		assertEquals(bedrooms, property.getBedrooms());
		assertEquals(bathrooms, property.getBathrooms());
		assertEquals(garden, property.getGarden());
		assertEquals(price, property.getPrice());
		assertEquals(status, property.getStatus());
		assertEquals(mockSeller, property.getSeller());
	}

	@Test
	public void testAllArgumentsConstructor() {
		// checking if the instance is not null
		assertNotNull(propertyWithBuyer);
		// checking if the values of the instance match the expected values
		assertEquals(id, propertyWithBuyer.getId());
		assertEquals(address, propertyWithBuyer.getAddress());
		assertEquals(postcode, propertyWithBuyer.getPostcode());
		assertEquals(type, propertyWithBuyer.getType());
		assertEquals(bedrooms, propertyWithBuyer.getBedrooms());
		assertEquals(bathrooms, propertyWithBuyer.getBathrooms());
		assertEquals(garden, propertyWithBuyer.getGarden());
		assertEquals(price, propertyWithBuyer.getPrice());
		assertEquals(status, propertyWithBuyer.getStatus());
		assertEquals(mockSeller, propertyWithBuyer.getSeller());
		assertEquals(mockBuyer, propertyWithBuyer.getBuyer());
	}

	@Test
	public void testGetId() {
        // Assert that the id of the property is correct
		assertEquals(id, property.getId());
	}

	@Test
	public void testGetAddress() {
        // Assert that the address of the property is correct
		assertEquals(address, property.getAddress());
	}

	@Test
	public void testGetPostcode() {
        // Assert that the postcode of the property is correct
		assertEquals(postcode, property.getPostcode());
	}

	@Test
	public void testGetType() {
        // Assert that the type of the property is correct
		assertEquals(type, property.getType());
	}

	@Test
	public void testGetBedrooms() {
        // Assert that the bedrooms of the property is correct
		assertEquals(bedrooms, property.getBedrooms());
	}

	@Test
	public void testGetBathrooms() {
        // Assert that the bathrooms of the property is correct
		assertEquals(bathrooms, property.getBathrooms());
	}
	@Test
	public void testGetGarden() {
        // Assert that the garden of the property is correct
		assertEquals(garden, property.getGarden());
	}

	@Test
	public void testGetPrice() {
        // Assert that the price of the property is correct
		assertEquals(price, property.getPrice());
	}

	@Test
	public void testGetStatus() {
        // Assert that the status of the property is correct
		assertEquals(status, property.getStatus());
	}
	@Test
	public void testGetSeller() {
        // Assert that the seller of the property is correct
		assertEquals(mockSeller, property.getSeller());
	}

	@Test
	public void testGetBuyer() {
        // Assert that the buyer of the property is correct
		assertEquals(mockBuyer, propertyWithBuyer.getBuyer());
	}

	@Test
	public void testSetId() {
        // Set the id on the booking object and assert that it is set correctly
		property.setId(2L);
		assertEquals(2L, property.getId());
	}

	@Test
	public void testSetAddress() {
        // Set the address on the booking object and assert that it is set correctly
		String newAddress = "456 Park Ave";
		property.setAddress(newAddress);
		assertEquals(newAddress, property.getAddress());
	}

	@Test
	public void testSetPostcode() {
        // Set the postcode on the booking object and assert that it is set correctly
		String newPostcode = "67890";
		property.setPostcode(newPostcode);
		assertEquals(newPostcode, property.getPostcode());
	}

	@Test
	public void testSetType() {
        // Set the type on the booking object and assert that it is set correctly
		TypeEnum newType = TypeEnum.DETACHED;
		property.setType(newType);
		assertEquals(newType, property.getType());
	}

	@Test
	public void testSetBedrooms() {
        // Set the bedrooms on the booking object and assert that it is set correctly
		Integer newBedrooms = 4;
		property.setBedrooms(newBedrooms);
		assertEquals(newBedrooms, property.getBedrooms());
	}

	@Test
	public void testSetBathrooms() {
        // Set the bathrooms on the booking object and assert that it is set correctly
		Integer newBathrooms = 3;
		property.setBathrooms(newBathrooms);
		assertEquals(newBathrooms, property.getBathrooms());
	}


	@Test
	public void testSetGarden() {
        // Set the garden on the booking object and assert that it is set correctly
		Boolean newGarden = false;
		property.setGarden(newGarden);
		assertEquals(newGarden, property.getGarden());
	}

	@Test
	public void testSetPrice() {
        // Set the price on the booking object and assert that it is set correctly
		Float newPrice = (float) 350000.00;
		property.setPrice(newPrice);
		assertEquals(newPrice, property.getPrice());
	}

	@Test
	public void testSetStatus() {
        // Set the status on the booking object and assert that it is set correctly
		StatusEnum newStatus = StatusEnum.SOLD;
		property.setStatus(newStatus);
		assertEquals(newStatus, property.getStatus());
	}


	@Test
	public void testSetSeller() {
        // Set the seller on the booking object and assert that it is set correctly
		SellerDomain newSeller = mock(SellerDomain.class);
		property.setSeller(newSeller);
		assertEquals(newSeller, property.getSeller());
	}

	@Test
	public void testSetBuyer() {
        // Set the buyer on the booking object and assert that it is set correctly
		BuyerDomain newBuyer = mock(BuyerDomain.class);
		propertyWithBuyer.setBuyer(newBuyer);
		assertEquals(newBuyer, propertyWithBuyer.getBuyer());
	}
}
