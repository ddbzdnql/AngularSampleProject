import { Component } from "@angular/core";
import { Product } from "../model/Product";
import { ProductRepository } from "../model/product.repository";

@Component({
	templateUrl: "productTable.component.html"
})

export class ProductTableComponent {
	constructor(private repository: ProductRepository) {}

	getProducts(): Product[] {
		return this.repository.getProducts();
	}

	deleteProduct(id: number){
		this.repository.deleteProduct(id);
	}
}
