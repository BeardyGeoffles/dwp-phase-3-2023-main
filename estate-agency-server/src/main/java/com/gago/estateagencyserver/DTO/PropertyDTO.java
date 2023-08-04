package com.gago.estateagencyserver.DTO;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class PropertyDTO {
    private Long id;
    @NotNull
    private String address;
    @NotNull
    private String postcode;
    @NotNull
    private String type;
    @NotNull
    private String garden;
    @NotNull
    private String status;

    @PositiveOrZero(message = "Price must be 0+")
    private int price;
    @PositiveOrZero(message = "Enter number of bedrooms in numeric format")
    private int bedroom;
    @PositiveOrZero(message = "Enter number of bathrooms in numeric format")
    private int bathroom;
    @NotNull(message = "Property must be associated with a seller")
    private Long sellerId;
    private Long buyerId;
}
