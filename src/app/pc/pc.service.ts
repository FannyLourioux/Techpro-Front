import { HttpClient } from '@angular/common/http';
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
  }]

  private url: string = 'http://localhost:8080/tech/items/telephone'
  
  constructor(private client: HttpClient) {
    this.client = client
  }

  getComputers() : Observable<Array<Article>> { return of(this.computers); }
  getLaptops() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/portables`); }
  getDesktops() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/fixes`); }
}
