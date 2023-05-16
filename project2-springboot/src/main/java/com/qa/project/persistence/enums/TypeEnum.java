package com.qa.project.persistence.enums;

/*
 * Enumeration for the different types of properties that can be stored in the database.
 * Each value represents a different type of property, and this is used in the property domain class.
 */

public enum TypeEnum {
    // A detached house is a single-family home that is not attached to any other homes.
    DETACHED,
    // A semi-detached house is a single-family home that is attached to one other home.
    SEMI,
    // An apartment is a unit in a multi-unit building.
    APARTMENT;
}
