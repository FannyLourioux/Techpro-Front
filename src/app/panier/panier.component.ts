import { Component, OnInit } from '@angular/core';
import { Article } from '../element';
import { ActivatedRoute } from '@angular/router'; 
import { AjoutArticleService } from './ajout-article.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  articlepanier: Array<Article> = [];
  total : number = 0;
  constructor(private article : AjoutArticleService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.recupArticles();
  }

  setTotal(l: Array<Article>): void {
    this.total = l.map(o => o.price).reduce((c,b)=> c + b, 0)
  } 

  recupArticles(){
    this.article.RecupArticles().subscribe(a => { 
      a = a.filter(aa => aa !== null);
      this.articlepanier = a;  
      console.log(a);
      this.setTotal(a);
      });
  }

  delete(id: string): void {
    if(confirm("Supprimer du panier ?")) {
      const n = this.articlepanier.filter(obj => obj.id !== id);
      localStorage.setItem('panier', JSON.stringify(n));
      location.reload();
    }
  }
}