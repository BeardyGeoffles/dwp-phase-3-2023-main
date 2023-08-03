package com.gago.estateagencyserver.DTO;

import lombok.Data;

@Data
public class PropertyDTO {
    private Long id;
    private String address, postcode, type, garden, status;
    private int price, bedroom, bathroom;
    private Long sellerId, buyerId;
}
