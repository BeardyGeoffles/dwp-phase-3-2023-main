package com.gago.estateagencyserver.models;

import jakarta.persistence.*;

@Entity
public class Property {
    @Id
    @GeneratedValue
    @Column(name = "property_id")
    private Long id;

    private String address, postcode, type, garden, status;
    private int price, bedroom, bathroom;

    @ManyToOne()
    @JoinColumn(name = "seller_id")
    private Seller seller;

    @ManyToOne()
    @JoinColumn(name = "buyer_id", nullable = true)
    private Buyer buyer;


    public Property() {
    }

    public Property(String address, String postcode, String type, String garden, String status,
                    int price, int bedroom, int bathroom, Seller seller
                    ) {
        this.address = address;
        this.postcode = postcode;
        this.type = type;
        this.garden = garden;
        this.status = status;
        this.price = price;
        this.bedroom = bedroom;
        this.bathroom = bathroom;
        this.seller = seller;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGarden() {
        return garden;
    }

    public void setGarden(String garden) {
        this.garden = garden;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getBedroom() {
        return bedroom;
    }

    public void setBedroom(int bedroom) {
        this.bedroom = bedroom;
    }

    public int getBathroom() {
        return bathroom;
    }

    public void setBathroom(int bathroom) {
        this.bathroom = bathroom;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }
}
