import { Component, OnInit } from '@angular/core';
import { Article } from '../../element';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-pc-accessoire',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [PcService]
})
export class PcAccessoireComponent implements OnInit {
  articles: Array<Article> = [];
  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.service.getAccessoire().subscribe(computers => this.articles = computers);
  }

}
