package com.gago.estateagencyserver.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Buyer {
    @Id
    @GeneratedValue
    @Column(name = "buyer_id")
    private Long id;

    private String firstName, surname, address, postcode, phone;

    @OneToMany(mappedBy = "buyer")
    private List<Property> properties;
    public Buyer() {
    }

    public Buyer(String firstName, String surname, String address, String postcode, String phone) {
        this.firstName = firstName;
        this.surname = surname;
        this.address = address;
        this.postcode = postcode;
        this.phone = phone;
    }

    public List<Property> getProperties() {
        return properties;
    }

    public void setProperties(List<Property> properties) {
        this.properties = properties;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
