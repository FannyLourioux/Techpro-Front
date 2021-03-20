import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/element';
import { StockageService } from '../stockage.service';

@Component({
  selector: 'app-stockage-accessoire',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [StockageService]
})
export class StockageAccessoireComponent implements OnInit {

  articles: Article[] = [];
  constructor(private service: StockageService) { }

  ngOnInit(): void {
    this.service.getAccessories().subscribe(disks => this.articles = disks);
  }
}
