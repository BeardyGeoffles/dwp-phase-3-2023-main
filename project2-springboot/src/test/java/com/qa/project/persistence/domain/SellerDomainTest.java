package com.qa.project.persistence.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class SellerDomainTest {

	private SellerDomain seller;

	@BeforeEach
	void setUp() {
		// Create a new SellerDomain object before each test
		seller = new SellerDomain(1L, "John", "Doe", "123 Main St", "12345", "555-555-5555");
	}

	// Test for the default constructor
	@Test
	void testDefaultConstructor() {
        // Create a new SellerDomain object using the default constructor
		SellerDomain defaultSeller = new SellerDomain();
        // Assert that the BuyerDomain exists (is not null)
		assertNotNull(defaultSeller);
	}

	// Test for the all arguments constructor
	@Test
	void testAllArgumentsConstructor() {
        // Create a new SellerDomain object using the all arguments constructor
		SellerDomain allArgsSeller = new SellerDomain(1L, "Hugh", "Mann", "999 Main St", "99999", "999-999-9999");
        // Assert that the values set in the constructor are correct
		assertEquals(1L, allArgsSeller.getId());
		assertEquals("Hugh", allArgsSeller.getFirstName());
		assertEquals("Mann", allArgsSeller.getSurname());
		assertEquals("999 Main St", allArgsSeller.getAddress());
		assertEquals("99999", allArgsSeller.getPostcode());
		assertEquals("999-999-9999", allArgsSeller.getPhone());
	}

	@Test
	void testGetId() {
		// Assert that the id of the seller is correct
		assertEquals(1L, seller.getId());
	}

	@Test
	void testGetFirstName() {
		// Assert that the first name of the seller is correct
		assertEquals("John", seller.getFirstName());
	}

	@Test
	void testGetSurname() {
		// Assert that the surname of the seller is correct
		assertEquals("Doe", seller.getSurname());
	}

	@Test
	void testGetAddress() {
		// Assert that the address of the seller is correct
		assertEquals("123 Main St", seller.getAddress());
	}

	@Test
	void testGetPostcode() {
		// Assert that the postcode of the seller is correct
		assertEquals("12345", seller.getPostcode());
	}

	@Test
	void testGetPhone() {
		// Assert that the phone number of the seller is correct
		assertEquals("555-555-5555", seller.getPhone());
	}

	@Test
	void testSetId() {
		// Set a new id for the seller and assert that it is set correctly
		seller.setId(2L);
		assertEquals(2L, seller.getId());
	}

	@Test
	void testSetFirstName() {
		// Set a new first name for the seller and assert that it is set correctly
		seller.setFirstName("Jane");
		assertEquals("Jane", seller.getFirstName());
	}

	@Test
	void testSetSurname() {
		// Set a new surname for the seller and assert that it is set correctly
		seller.setSurname("Smith");
		assertEquals("Smith", seller.getSurname());
	}

	@Test
	void testSetAddress() {
		// Set a new address for the seller and assert that it is set correctly
		seller.setAddress("456 Park Ave");
		assertEquals("456 Park Ave", seller.getAddress());
	}

	@Test
	void testSetPostcode() {
		// Set a new postcode for the seller and assert that it is set correctly
		seller.setPostcode("67890");
		assertEquals("67890", seller.getPostcode());
	}

	@Test
	void testSetPhone() {
		// Set a new phone number for the seller and assert that it is set correctly
		seller.setPhone("555-555-5556");
		assertEquals("555-555-5556", seller.getPhone());
	}
}