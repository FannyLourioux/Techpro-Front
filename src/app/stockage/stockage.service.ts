import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class StockageService {
  private url: string = 'http://localhost:8080/tech/items/stockage'

  constructor(private client: HttpClient, private authService: AuthService) {}
  
  getStorage() : Observable<Array<Article>> { return this.client.get<Array<Article>>(this.url); }
  getUsb() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/cles`); }
  getDisks() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/disques`); }
  getAccessories() : Observable<Array<Article>> { return this.client.get<Array<Article>>(`${this.url}/accessoires`); }
  delete(id: string): void { 
    
    const x = this.authService.estConnecte;
    if (x()) {
      this.client.delete(`http://localhost:8080/tech/item/${id}`).subscribe(() => console.log('working')); 
    }
  }

}
