package com.qa.project.business;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.project.persistence.domain.PropertyDomain;
import com.qa.project.business.dto.PropertyDTO;
import com.qa.project.persistence.repo.PropertyRepo;

/*
 * This PropertyService class contains methods that perform CRUD operations on Property 
 * entities using the PropertyRepo for database interaction and ModelMapper for 
 * mapping between PropertyDomain and PropertyDTO.
 * The CRUD functionality and the methods provided are
 *    - create
 *    - read all
 *    - read one
 *    - update
 *    - delete
 */

@Service
public class PropertyService {
	
	// dependencies
	private PropertyRepo repo; // our JPA repo for our Property
	private ModelMapper mapper; // automatically maps DTOs onto Entities (need to create the Bean in config)
	
	// constructor
	@Autowired // saves us writing boilerplate to connect them
	public PropertyService(PropertyRepo repo, ModelMapper mapper) {
		this.repo = repo;
		this.mapper = mapper;
	}
	
	private PropertyDTO mapToDto(PropertyDomain model) {
		return this.mapper.map(model, PropertyDTO.class);
	}
	
	/*
	 * C R U D
	 */
	
	// Create - POST
	public PropertyDTO create(PropertyDomain model) {
		return this.mapToDto(this.repo.save(model));
	}
	
	// Read - GET
	//	all (using a stream)
	public List<PropertyDTO> readAll() {
		return this.repo.findAll().stream()
				.map(this::mapToDto)
				.collect(Collectors.toList());
	}
	//	one
	public PropertyDTO readOne(Long id) {
		return this.mapToDto(this.repo.findById(id).orElseThrow());
	}
	
	// Update - PUT
	public PropertyDTO update(Long id, PropertyDomain model) {
		
		PropertyDomain existing = this.repo.findById(id).orElseThrow();
		
		existing.setAddress(model.getAddress());
		existing.setPostcode(model.getPostcode());
		existing.setType(model.getType());
		existing.setBedrooms(model.getBedrooms());
		existing.setBathrooms(model.getBathrooms());
		existing.setGarden(model.getGarden());
		existing.setPrice(model.getPrice());
		existing.setStatus(model.getStatus());
		existing.setSeller(model.getSeller());
		existing.setBuyer(model.getBuyer());

		return this.mapToDto(this.repo.save(existing));
	}
	
	// Delete - DELETE
	public boolean delete(Long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}
	
}
