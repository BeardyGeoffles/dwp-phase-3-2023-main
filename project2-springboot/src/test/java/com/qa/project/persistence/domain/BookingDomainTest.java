package com.qa.project.persistence.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import java.sql.Timestamp;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class BookingDomainTest {
	
	@Mock
	private PropertyDomain property;

	@Mock
    private BuyerDomain buyer;
    private Timestamp time;
    private BookingDomain booking;

    @BeforeEach
    void setUp() {
        // Create mock objects for the related classes
        time = new Timestamp(System.currentTimeMillis());
        booking = new BookingDomain(1L, buyer, property, time);
    }

    @Test
    void testDefaultConstructor() {
        // Create a new BookingDomain object using the default constructor
        BookingDomain defaultBooking = new BookingDomain();
        // Assert that the BookingDomain exists (is not null)
		assertNotNull(defaultBooking);
    }

    @Test
    void testAllArgumentConstructor() {
		// checking if the instance is not null
		assertNotNull(booking);
        // Assert that the values set in the constructor are correct
        assertEquals(1L, booking.getId());
        assertEquals(buyer, booking.getBuyer());
        assertEquals(property, booking.getProperty());
        assertEquals(time, booking.getTime());
    }
    
    @Test
    void testGetId() {
        // Assert that the id of the booking is correct
        assertEquals(1L, booking.getId());
    }

    @Test
    void testGetBuyer() {
        // Assert that the buyer of the booking is correct
        assertEquals(buyer, booking.getBuyer());
    }

    @Test
    void testGetProperty() {
        // Assert that the property of the booking is correct
        assertEquals(property, booking.getProperty());
    }

    @Test
    void testGetTime() {
        // Assert that the time of the booking is correct
        assertEquals(time, booking.getTime());
    }
    
    @Test
    void testSetId() {
        // Set the id on the booking object and assert that it is set correctly
        booking.setId(2L);
        assertEquals(2L, booking.getId());
    }

    @Test
    void testSetBuyer() {
        // Set the buyer on the booking object and assert that it is set correctly
		BuyerDomain newBuyer = mock(BuyerDomain.class);
        booking.setBuyer(newBuyer);
        assertEquals(newBuyer, booking.getBuyer());
    }
    
    @Test
    void testSetProperty() {
        // Set the property on the booking object and assert that it is set correctly
		PropertyDomain newProperty = mock(PropertyDomain.class);
        booking.setProperty(newProperty);
        assertEquals(newProperty, booking.getProperty());
    }

    @Test
    void testSetTime() {
        // Set the time on the booking object and assert that it is set correctly
        booking.setTime(time);
        assertEquals(time, booking.getTime());
    }
}
