import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class StockageService {

  private items: Array<Article> = [{
    id: 3,
    name: 'Clé USB 8GB',
    brand: 'Sam Disk',
    category: 'usb',
    photo: '/assets/img/x',
    label: 'Fashion is important even for an usb stick',
    price: 19
  },
  {
    id: 5,
    name: 'Disque 32 GB',
    brand: 'Acarnite',
    category: 'disque',
    photo: '/assets/img/y',
    label: 'An average computer',
    price: 79
  },
  {
    id: 4,
    name: 'Lots 5 clés usb 2 GB',
    brand: 'Enuoda',
    category: 'usb',
    photo: '/assets/img/x',
    label: 'Pour toute la famille',
    price: 29
  },
  
  {
    id: 1,
    name: 'Disque 2TB',
    brand: 'San Disk',
    category: 'disque',
    photo: '/assets/img/x',
    label: 'Pour un stockage complet',
    price: 257
  }]

  private url: string = 'http://localhost:8080/tech/items/stockage'

  constructor(private client: HttpClient) {}

  getStorage() : Observable<Array<Article>> { return of(this.items); }
  getUsb() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/cles`) }
  getDisks() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/disques`); }
  getAccessories() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/accessoires`); }

}
