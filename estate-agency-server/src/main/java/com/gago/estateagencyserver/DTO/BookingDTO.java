package com.gago.estateagencyserver.DTO;

import lombok.Data;

@Data
public class BookingDTO {
    private Long id;
    private Long propertyId, buyerId;
    private String time;
}