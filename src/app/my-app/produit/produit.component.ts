import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produit: { name: string, prix: number } = {
    name: "Sansumg galaxie fold 9",
    prix: 299
  };

  constructor() { }

  ngOnInit(): void {
  }

}
