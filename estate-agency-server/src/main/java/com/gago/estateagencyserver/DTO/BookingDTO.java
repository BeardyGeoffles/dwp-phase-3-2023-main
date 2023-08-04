package com.gago.estateagencyserver.DTO;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class BookingDTO {


    private Long id;
    @NotNull(message = "Property must be selected")
    private Long propertyId;
    @NotNull(message = "Buyer must be selected")
    private Long buyerId;
    @NotBlank(message = "Date and time must be entered")
    private String time;
}