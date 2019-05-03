import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
	templateUrl: "cartDetail.component.html"
})

export class CartDetailComponent {
	private cart : Cart

	constructor(c : Cart){
		this.cart = c;
	}

	inc(l){
		this.cart.updateQuantity(l.product, 1);
	}

	dec(l){
		this.cart.updateQuantity(l.product, -1);
	}
}
