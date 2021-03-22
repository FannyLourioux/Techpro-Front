import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../element';

@Injectable({
  providedIn: 'root'
})
export class AjoutArticleService {

  constructor(private http: HttpClient) { }
  RecupArticles() : Observable<Array<Article>> {
    let idAll : Array<string> = [];
    
    idAll = JSON.parse(localStorage.getItem('panier')|| '[]').map((obj: any) => {console.log(obj); return obj.id});
    return this.http.post<Array<Article>>("http://localhost:8080/tech/items/ids", idAll);
    
  }
}
