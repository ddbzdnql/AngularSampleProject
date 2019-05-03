import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource{
	baseUrl: string;

	constructor(private http: HttpClient){
		console.log(http);
		this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
		console.log(this.basrUrl);
	}

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl + "products");
	}

	saveOrder(order: Order): Observable<Order> {
		return this.http.post<Order>(this.baseUrl + "orders", order);
	}
}
