import { Injectable } from "@angular/core";
import { Product } from "./Product";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository{
	private products : Product[] = [];
	private categories : string[] = [];

	constructor(private ds : StaticDataSource) {
		ds.getProducts().subscribe( data => {
			this.products = data;
			this.categories = data.map(d => d.category).filter((c, index, arr) => arr.indexOf(c) == index).sort();
		});
	}

	getProducts(category: string=null): Product[] {
		return this.products.filter(p => category == null || category == p.category);
	}

	getProduct(id: number): Product {
		return this.products.find(p => p.id == id);
	}

	getCategories(): string[] {
		return this.categories;
	}
}
