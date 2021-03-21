import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class PcService {
  private url: string = 'http://localhost:8080/tech/items/pc'
  
  constructor(private client: HttpClient) {
    this.client = client
  }

  getComputers() : Observable<Array<Article>> { return of([]); }
  getLaptops() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/portables`); }
  getDesktops() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/fixes`); }
  getAccessories() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/accessoires`); }
  delete(id: string): void { 
    this.client.delete(`http://localhost:8080/tech/item/${id}`).subscribe(() => console.log('working')); 
  }
}
