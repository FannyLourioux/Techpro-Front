import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/element';
import { TelephoneService } from '../telephone.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [TelephoneService]
})
export class TelephoneListComponent implements OnInit {
  articles: Array<Article> = [];
  constructor(private service: TelephoneService) { }

  ngOnInit(): void {
    this.service.getPhones().subscribe(phones => this.articles = phones);
  }

  delete(id: string): void {
    this.service.delete(id);
    location.reload();
  }
  ajoutPanier(id: string){
    const panier = localStorage.getItem('panier');
    const str = JSON.parse(panier || '[]');
    const pa = str.push({id});
    localStorage.setItem('panier',JSON.stringify(str));
    //localStorage.setItem('panier',`[{"id": "${id}"}]`);
    console.log(str);
    //localStorage.setItem('panier',`${JSON.stringify([...JSON.parse(localStorage.getItem("panier")|| '[]'),id])}`);
  }
}