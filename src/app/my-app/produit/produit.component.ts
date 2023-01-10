import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  // const car: { type: string, model: string, year: number } = {
  //   type: "Toyota",
  //   model: "Corolla",
  //   year: 2009
  // };

  name: string = "Sansumg galaxie fold 9";
  prix: number = 299;


  produit: { name: string, prix: number } = {
    name: "Sansumg galaxie fold 9",
    prix: 299
  };

  constructor() { }

  ngOnInit(): void {
  }

}
