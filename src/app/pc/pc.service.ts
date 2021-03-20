import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class PcService {
  private computers: Array<Article> = [{
    id: 1344,
    name: 'Macbook Pro',
    brand: 'Apple',
    category: 'portable',
    photo: '/assets/img/x',
    label: 'The fastest computer',
    price: 1449
  },
  {
    id: 3554,
    name: 'X3464G',
    brand: 'HP',
    category: 'portable',
    photo: '/assets/img/y',
    label: 'An average computer',
    price: 789
  },
  {
    id: 1494,
    name: 'Bingo ingo',
    brand: 'Asus',
    category: 'fixe',
    photo: '/assets/img/x',
    label: 'The funniest computer',
    price: 1099
  },
  
  {
    id: 1494,
    name: 'Tooooop',
    brand: 'Acer',
    category: 'fixe',
    photo: '/assets/img/x',
    label: 'The computer at the top of the market',
    price: 2579
  },

  {
    id: 155,
    name: 'Clavier color',
    brand: 'Razer',
    category: 'accessoire',
    photo: '/assets/img/x',
    label: 'Le clavier multicolore le plus beau pour vos setup gaming',
    price: 60
  },
  {
    id: 156,
    name: 'Souris gaming',
    brand: 'Razer',
    category: 'accessoire',
    photo: '/assets/img/x',
    label: 'La souris gaming qui vous fait cliquer rapidement',
    price: 40
  }
  ]
  constructor() { }

  getComputers() : Observable<Array<Article>> { return of(this.computers); }
  getLaptops() : Observable<Array<Article>> { return of(this.computers.filter(computer => computer.category === 'portable')); }
  getDesktops() : Observable<Array<Article>> { return of(this.computers.filter(computer => computer.category === 'fixe')); }
  getAccessoire() : Observable<Array<Article>> { return of(this.computers.filter(computer => computer.category === 'accessoire')); }
}
