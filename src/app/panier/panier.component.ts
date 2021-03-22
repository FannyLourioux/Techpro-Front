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
  total : number = 0;
  articlepanier: Array<Article> = [];
  constructor(private article : AjoutArticleService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.recupArticles();
    


  }
  recupArticles(){
    this.article.RecupArticles().subscribe(a =>{ this.articlepanier = a; this.total = a.map(o => o.price).reduce((c,b)=> c + b, 0) });
  }
}