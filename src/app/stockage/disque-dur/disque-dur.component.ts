import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/element';
import { StockageService } from '../stockage.service';

@Component({
  selector: 'app-disque-dur',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [StockageService]
})
export class DisqueDurComponent implements OnInit {

  articles: Article[] = [];
  constructor(private service: StockageService) { }

  ngOnInit(): void {
    this.service.getDisks().subscribe(disks => this.articles = disks);
  }

  delete(id: string): void {
    this.service.delete(id);
    location.reload();
  }

}
