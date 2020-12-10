import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';

import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    CartComponent,
    BreweryBeersComponent,
    BreweryAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
