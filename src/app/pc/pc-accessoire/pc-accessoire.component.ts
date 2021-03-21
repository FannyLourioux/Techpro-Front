import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/element';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-pc-accessoire',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css']
})
export class PcAccessoireComponent implements OnInit {
  articles: Array<Article> = []

  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.service.getAccessories().subscribe(items => this.articles = items);
  }

}
