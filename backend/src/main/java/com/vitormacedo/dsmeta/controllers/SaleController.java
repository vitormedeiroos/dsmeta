package com.vitormacedo.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vitormacedo.dsmeta.entities.Sale;
import com.vitormacedo.dsmeta.services.SaleService;
import com.vitormacedo.dsmeta.services.SmsService;

@RestController
@RequestMapping(value  = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	@Autowired
	private SmsService smsService;
	
	@GetMapping
	public Page<Sale> findSales(
			 @RequestParam(value="minDate", defaultValue = "") String minDate, 
			 @RequestParam(value="maxDate", defaultValue = "") String maxDate, 
			Pageable pageable){
		return service.findSales(minDate, maxDate, pageable);
	}
	@GetMapping("/{id}/notification")
	/*void - não retorna os dados*/
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	
	}
}
