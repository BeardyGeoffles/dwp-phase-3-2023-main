package com.gago.estateagencyserver.repositories;

import com.gago.estateagencyserver.models.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepo extends JpaRepository<Seller, Long> {
}
