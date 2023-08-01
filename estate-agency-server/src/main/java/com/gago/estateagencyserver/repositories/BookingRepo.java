package com.gago.estateagencyserver.repositories;

import com.gago.estateagencyserver.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository <Booking, Long>{

}
