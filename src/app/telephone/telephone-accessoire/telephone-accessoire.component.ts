import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Article } from 'src/app/element';
import { TelephoneService } from '../telephone.service';

@Component({
  selector: 'app-telephone-accessoire',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [TelephoneService]
})
export class TelephoneAccessoireComponent implements OnInit {
  articles: Array<Article> = []
  constructor(private service: TelephoneService, private authService: AuthService) { }

  ngOnInit(): void {
    this.service.getAccessories().subscribe(phones => this.articles = phones);
  }

  delete(id: string): void {
    const x = this.authService.estConnecte;
    if (x()) {
      this.service.delete(id);
      location.reload();
    }
  }

}