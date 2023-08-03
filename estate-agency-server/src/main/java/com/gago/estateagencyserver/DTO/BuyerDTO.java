package com.gago.estateagencyserver.DTO;

import lombok.Data;

@Data
public class BuyerDTO {
    private Long id;
    private String firstName, surname, address, postcode, phone;
}


