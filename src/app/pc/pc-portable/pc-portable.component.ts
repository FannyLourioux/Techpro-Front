import { Component, OnInit } from '@angular/core';
import { Article } from '../../element';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [PcService]
})
export class PcPortableComponent implements OnInit {
  articles: Array<Article> = [];
  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.service.getLaptops().subscribe(computers => this.articles = computers);
  }

}
