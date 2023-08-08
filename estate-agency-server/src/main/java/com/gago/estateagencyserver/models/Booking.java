package com.gago.estateagencyserver.models;

import jakarta.persistence.*;

@Entity
public class Booking {
    @Id
    @GeneratedValue
    @Column(name = "booking_id")
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "property_id")
    private Property propertyId;

    @ManyToOne()
    @JoinColumn(name = "buyer_id")
    private Buyer buyerId;

    private String time;

    public Booking() {
    }

    public Booking(Property propertyId, Buyer buyerId, String time) {
        this.propertyId = propertyId;
        this.buyerId = buyerId;
        this.time = time;
    }

    public Property getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Property propertyId) {
        this.propertyId = propertyId;
    }

    public Buyer getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(Buyer buyerId) {
        this.buyerId = buyerId;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
