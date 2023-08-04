package com.gago.estateagencyserver.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BuyerDTO {

    private Long id;

    @NotBlank(message = "Name must not be blank")
    private String firstName;
    @NotBlank(message = "Name must not be blank")
    private String surname;
    @NotBlank(message = "Address must not be blank")
    private String address;
    @NotBlank(message = "postcode must be entered")
    private String postcode;
    private String phone;
}


