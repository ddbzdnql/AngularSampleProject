import { Component } from "@angular/core";
import { Product } from "../model/Product";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
	selector: "store",
	templateUrl: "store.component.html"
})

export class StoreComponent {
	public selectedCategory = null;
	public currentPage = 1;
	public numPerPage = 4;
	public totalPage = 0;

	constructor(private repo: ProductRepository, private cart: Cart, private router: Router) {}

	get products(): Product[] {
		let raw = this.repo.getProducts(this.selectedCategory);
		this.totalPage = Math.ceil(raw.length / this.numPerPage);
		return raw.slice((this.currentPage-1)*this.numPerPage,
			this.currentPage*this.numPerPage>=raw.length ? 
			raw.length : this.currentPage*this.numPerPage );
	}

	get categories(): string[] {
		return this.repo.getCategories();
	}

	changeCtg(ctg?: string){
		this.selectedCategory = ctg;
		this.currentPage = 1;
	}

	changePage(page: number){
		this.currentPage = page;
	}

	changePageSize(size: number){
		this.numPerPage = size;
		this.currentPage = 1;
	}

	addProductToCart(product: Product, quantity: number = 1){
		this.cart.addLine(product, quantity);
		this.router.navigateByUrl("/cart");
	}

	getPageSequence(): number[] {
		
		let toRet = Array(this.totalPage).fill(0).map( (c, index) => index+1 );
		console.log(toRet);
		return toRet;
	}
}
