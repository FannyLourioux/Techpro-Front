import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
private phones: Array<Article> = [{
    id: 32,
    name: 'Iphone6s',
    brand: 'Apple',
    category: 'portable',
    photo: '/assets/img/x',
    label: 'The fastest phone',
    price: 1449
  },
  {
    id: 11,
    name: 'Galaxy A1',
    brand: 'Samsung',
    category: 'portable',
    photo: '/assets/img/y',
    label: 'An average phone',
    price: 789
  },
  {
    id: 56,
    name: 'E720',
    brand: 'Gigaset',
    category: 'fixe',
    photo: '/assets/img/x',
    label: 'The funniest phone',
    price: 1099
  },
  
  {
    id: 29,
    name: 'KX-TGH722',
    brand: 'Panasonic',
    category: 'fixe',
    photo: '/assets/img/x',
    label: 'The phone at the top of the market',
    price: 2579
  },

  {
    id:17,
    name: 'Coque Fairy tail',
    brand: 'Rhinoshield',
    category: 'accessoire',
    photo: '/assets/img/x',
    label: 'Une coque de qualité',
    price: 43
  },
  {
    id:18,
    name: 'Ecouteurs sans fil SoundSport',
    brand: 'Bose',
    category: 'accessoire',
    photo: '/assets/img/x',
    label: 'Des écouteurs faient pour le sport',
    price: 149
  }]
  constructor() { }

  getPhones() : Observable<Array<Article>> { return of(this.phones); }
  getMobiles() : Observable<Array<Article>> { return of(this.phones.filter(phone => phone.category === 'portable')); }
  getFixedLines() : Observable<Array<Article>> { return of(this.phones.filter(phone => phone.category === 'fixe')); }
  getAccessories() : Observable<Array<Article>> { return of(this.phones.filter(phone => phone.category === 'accessoire')); }
}
