package com.vitormacedo.dsmeta.entities;

import java.time.LocalDate;/* shift + ctrl + o  */

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity/*anotation -(perto  pré-processamento na hora de compilar e executar o prjt*/
@Table(name= "tb_sales")
/* */
public class Sale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)/*id´s um em um*/
	private Long id;/*(O id vai ser único, pois vai identificar as compras) Long - Número inteiro que pode ser grande*/
	private String sellerName;
	private Integer visited;/*Integer - numero inteiro que aceita tamanhos menores*/
	private Integer deals;
	private Double amount; /* Números quebrados */
	private LocalDate date; /* error - importar bib*/
	
	public Sale( ) {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Integer getVisited() {
		return visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDealls() {
		return deals;
	}

	public void setDealls(Integer deals) {
		this.deals = deals;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
}
