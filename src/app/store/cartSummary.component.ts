import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { CartSnapshotComponent } from "./cartSnapshot.component";

@Component({
	selector: "cart-summary",
	templateUrl: "cartSummary.component.html"
})

export class CartSummaryComponent{
	private snapshotVis = false;

	constructor(public cart: Cart) {
		console.log(cart); 
	}

	snapshotVisible(){
		this.snapshotVis = !this.snapshotVis;
	}

	snapshotSetVisible(v: boolean){
		this.snapshotVis = v;
	}
}
