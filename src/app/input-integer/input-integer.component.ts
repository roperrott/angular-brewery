import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  beer: Beer;

  ngOnInit(): void {
  }

  upQuantity(beer: Beer): void{
    if(beer.quantity < beer.stock){
      beer.quantity++;
    }
    
  }

  downQuantity(beer: Beer): void{
    if(beer.quantity > 0){
      beer.quantity--;
    }
    
  }

  changeQuantity(event, beer: Beer) :void{
    console.log(event.key);
  }

}
