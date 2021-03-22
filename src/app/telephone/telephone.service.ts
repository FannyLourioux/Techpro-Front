import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
  private url: string = "http://localhost:8080/tech/items/telephone"
  constructor(private client: HttpClient, private authService: AuthService) { }

  getPhones() : Observable<Array<Article>> { return this.client.get<Array<Article>>(this.url); }
  getMobiles() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/portables`); }
  getFixedLines() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/fixes`); }
  getAccessories() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/accessoires`); }
  delete(id: string): void { 
    const x = this.authService.estConnecte;
    if (x())this.client.delete(`http://localhost:8080/tech/item/${id}`).subscribe(() => console.log('working')); 
  }
}
