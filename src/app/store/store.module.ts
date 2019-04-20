import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { CartSnapshotComponent } from "./cartSnapshot.component";
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
	declarations: [StoreComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, CartSnapshotComponent],
	exports: [StoreComponent, CartDetailComponent, CheckoutComponent, CartSnapshotComponent]
})

export class StoreModule{}
