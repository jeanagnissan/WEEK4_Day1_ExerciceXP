import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { ProduitComponent } from './produit/produit.component';



@NgModule({
  declarations: [
    GreetingComponent,
    ProduitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreetingComponent,
    ProduitComponent
  ]
})
export class MyAppModule { }
