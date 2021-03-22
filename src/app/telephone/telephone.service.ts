import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
  private url: string = "http://localhost:8080/tech/items/telephone"
  constructor(private client: HttpClient) { }

  getPhones() : Observable<Array<Article>> { return of([]); }
  getMobiles() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/portables`); }
  getFixedLines() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/fixes`); }
  getAccessories() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/accessoires`); }
  delete(id: string): void { 
    this.client.delete(`http://localhost:8080/tech/item/${id}`).subscribe(() => console.log('working')); 
  }
}
