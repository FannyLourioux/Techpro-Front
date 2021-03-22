import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Article } from 'src/app/element';
import { TelephoneService } from '../telephone.service';

@Component({
  selector: 'app-telephone-portable',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [TelephoneService]
})
export class TelephonePortableComponent implements OnInit {
  articles: Article[] = [];
  
  constructor(private service: TelephoneService, private authService: AuthService) { }

  ngOnInit(): void {
    this.service.getMobiles().subscribe(phones => this.articles = phones);
  }

  delete(id: string): void {
    const x = this.authService.estConnecte;
    if (x()) {
      this.service.delete(id);
      location.reload();
    }
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
