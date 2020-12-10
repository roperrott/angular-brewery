import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [
    {
      name: 'Puro humo',
      type: 'Cream Stout',
      description:'De un profundo color oscuro con aromas tostado y café. Presenta un sabor intenso y un cuerpo y espuma cremosa. IBU 18 ALC% 4.5',
      price: 210,
      stock: 3,
      image: 'assets/img/cream.png',
      clearance: false,
      quantity:0,
    },
    {
      name: 'amber lager',
      type: 'Lager',
      description:'Sus maltas le otorgan un color ámbar rojizo y un sabor balanceado entre el dulzor y el amargor. IBU 18 ALC% 4.5',
      price: 190,
      stock: 30,
      image: 'assets/img/cream.png',
      clearance: true,
      quantity:0,
    },
    {
      name: 'pink apa',
      type: 'APA',
      description:'De bajo contenido alcohólico, fuerte presencia en aroma y gusto de lúpulo americano. Destacan notas cítricas y de frutas tropicales. IBU 35 ALC% 3.5',
      price: 200,
      stock: 0,
      image: 'assets/img/cream.png',
      clearance: false,
      quantity:0,
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

 

}
