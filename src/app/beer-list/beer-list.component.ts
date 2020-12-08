import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beer = {
    "name": "PURO HUMO",
    "type": "Cream Stout",
    "description":"De un profundo color oscuro con aromas tostado y café. Presenta un sabor intenso y un cuerpo y espuma cremosa. IBU 18 ALC% 4.5",
    "price": 180,
    "image": "assets/img/cream.png"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
