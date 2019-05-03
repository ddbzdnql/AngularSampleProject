import { Product } from "./Product";
import { Injectable } from "@angular/core";

@Injectable()
export class Cart{
	public lines: CartLine[] = [];
	public itemCount: number = 0;
	public cartPrice: number = 0;

	addLine(product: Product, quantity: number = 1){
		let prev = this.lines.find((c) => c.product.id == product.id);
		if (prev != undefined){
			prev.quantity += quantity;
		}else{
			this.lines.push( new CartLine(product, quantity));
		}
		this.recalculate();
	}

	updateQuantity(product: Product, quantity: number){
		let prev = this.lines.find((c) => c.product.id == product.id);
		if (prev != undefined){
			prev.quantity += quantity;
			if (prev.quantity == 0){
				this.lines.splice(this.lines.findIndex((c) => c.product.id == product.id), 1);
			}
		}
		this.recalculate();
	}

	removeLine(id: number){
		let index = this.lines.findIndex(c => c.product.id == id);
		this.lines.splice(index, 1);
		this.recalculate();
	}

	private recalculate(){
		this.itemCount = 0;
		this.cartPrice = 0;
		this.lines.forEach((c) => {this.itemCount += c.quantity; this.cartPrice += c.lineTotal});
	}

	public clear(){
		this.lines = [];
		this.itemCount = 0;
		this.cartPrice = 0;
	}
}

export class CartLine{
	constructor(public product: Product, public quantity: number){}

	get lineTotal(){
		return this.quantity * this.product.price;
	}
}
