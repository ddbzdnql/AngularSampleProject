import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { CartLine } from "../model/cart.model";

@Component({
	selector: "cart-snapshot",
	templateUrl: "./cartSnapshot.component.html"
})

export class CartSnapshotComponent{
	private visible: boolean = false;
	constructor(public cart: Cart){console.log(cart); console.log("from snapshot")}

	public setVisible(v: boolean){
		this.visible = v;
	}

	public incQuantity(cl: CartLine){
		this.cart.updateQuantity(cl.product, +1);
	}

	public decQuantity(cl: CartLine){
		this.cart.updateQuantity(cl.product, -1);
	}
}

