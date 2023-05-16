package com.qa.project.persistence.enums;


/*
 * Enumeration for the different statuses of properties that can be stored in the database.
 * Each value represents a different status of property, and this is used in the property domain class.
 */


public enum StatusEnum {
	// Property is available for sale
    FORSALE, 
    // Property has been sold
    SOLD, 
    // Property has been withdrawn from sale
    WITHDRAWN; 
}
