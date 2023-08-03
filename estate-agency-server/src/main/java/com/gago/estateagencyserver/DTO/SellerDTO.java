package com.gago.estateagencyserver.DTO;

import lombok.Data;

@Data
public class SellerDTO {
    private Long id;
    private String firstName, surname, address, postcode, phone;
}
