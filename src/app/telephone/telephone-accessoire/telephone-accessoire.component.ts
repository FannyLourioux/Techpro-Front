import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/element';
import { TelephoneService } from '../telephone.service';

@Component({
  selector: 'app-telephone-accessoire',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css']
})
export class TelephoneAccessoireComponent implements OnInit {
  articles: Array<Article> = []
  constructor(private service: TelephoneService) { }

  ngOnInit(): void {
    this.service.getAccessories().subscribe(phones => this.articles = phones);
  }

}