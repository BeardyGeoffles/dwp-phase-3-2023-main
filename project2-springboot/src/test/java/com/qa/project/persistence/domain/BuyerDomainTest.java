package com.qa.project.persistence.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class BuyerDomainTest {
	
    private BuyerDomain buyer;

    @Mock
    private PropertyDomain property1;

    @Mock
    private PropertyDomain property2;

    @BeforeEach
    void setUp() {
        // Create a new BuyerDomain object before each test
        buyer = new BuyerDomain(1L, "John", "Doe", "123 Main St", "12345", "555-555-5555");
    }

    @Test
    void testDefaultConstructor() {
        // Create a new BuyerDomain object using the default constructor
        BuyerDomain defaultBuyer = new BuyerDomain();
        // Assert that the BuyerDomain exists (is not null)
		assertNotNull(defaultBuyer);
    }
    
    @Test
    void testAllArgumentConstructor() {
		// checking if the instance is not null
		assertNotNull(buyer);
        // Assert that the values set in the constructor are correct
        assertEquals(1L, buyer.getId());
        assertEquals("John", buyer.getFirstName());
        assertEquals("Doe", buyer.getSurname());
        assertEquals("123 Main St", buyer.getAddress());
        assertEquals("12345", buyer.getPostcode());
        assertEquals("555-555-5555", buyer.getPhone());
    }

    @Test
    void testGetId() {
        // Assert that the id of the buyer is correct
        assertEquals(1L, buyer.getId());
    }

    @Test
    void testGetFirstName() {
        // Assert that the first name of the buyer is correct
        assertEquals("John", buyer.getFirstName());
    }

    @Test
    void testGetSurname() {
        // Assert that the surname of the buyer is correct
        assertEquals("Doe", buyer.getSurname());
    }

    @Test
    void testGetAddress() {
        // Assert that the address of the buyer is correct
        assertEquals("123 Main St", buyer.getAddress());
    }

    @Test
    void testGetPostcode() {
        // Assert that the postcode of the buyer is correct
        assertEquals("12345", buyer.getPostcode());
    }

    @Test
    void testGetPhone() {
        // Assert that the phone number of the buyer is correct
        assertEquals("555-555-5555", buyer.getPhone());
    }

    @Test
    void testGetProperties() {
        // Set up the mock properties
        when(property1.getId()).thenReturn(1L);
        when(property2.getId()).thenReturn(2L);

        // Add the mock properties to the buyer's properties list
        List<PropertyDomain> properties = new ArrayList<>();
        properties.add(property1);
        properties.add(property2);
        buyer.setProperties(properties);

        // Assert that the properties list of the buyer is correct
        assertEquals(2, buyer.getProperties().size());
        assertEquals(1L, buyer.getProperties().get(0).getId());
        assertEquals(2L, buyer.getProperties().get(1).getId());
    }

    @Test
    void testSetId() {
        // Set a new id for the buyer and assert that it is set correctly
        buyer.setId(2L);
        assertEquals(2L, buyer.getId());
    }

    @Test
    void testSetFirstName() {
        // Set a new first name for the buyer and assert that it is set correctly
        buyer.setFirstName("Jane");
        assertEquals("Jane", buyer.getFirstName());
    }

    @Test
    void testSetSurname() {
        // Set a new surname for the buyer and assert that it is set correctly
        buyer.setSurname("Smith");
        assertEquals("Smith", buyer.getSurname());
    }
    
    @Test
    void testSetAddress() {
        // Set a new address for the buyer and assert that it is set correctly
        buyer.setAddress("456 Park Ave");
        assertEquals("456 Park Ave", buyer.getAddress());
    }

    @Test
    void testSetPostcode() {
        // Set a new postcode for the buyer and assert that it is set correctly
        buyer.setPostcode("67890");
        assertEquals("67890", buyer.getPostcode());
    }

    @Test
    void testSetPhone() {
        // Set a new phone number for the buyer and assert that it is set correctly
        buyer.setPhone("555-555-5556");
        assertEquals("555-555-5556", buyer.getPhone());
    }
    
    @Test
    void testSetProperties() {
        // Set up the mock properties
        when(property1.getId()).thenReturn(1L);
        when(property2.getId()).thenReturn(2L);

        // Create a new properties list and add the mock properties to it
        List<PropertyDomain> properties = new ArrayList<>();
        properties.add(property1);
        properties.add(property2);

        // Set the properties list on the buyer object
        buyer.setProperties(properties);

        // Assert that the properties list of the buyer is correct
        assertEquals(2, buyer.getProperties().size());
        assertEquals(1L, buyer.getProperties().get(0).getId());
        assertEquals(2L, buyer.getProperties().get(1).getId());
    }
    
}