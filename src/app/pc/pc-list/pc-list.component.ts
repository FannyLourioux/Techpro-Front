import { Component, OnInit } from '@angular/core';
import { Article } from '../../element';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [PcService]
})
export class PcListComponent implements OnInit {
  articles: Array<Article> = [];
  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.service.getComputers().subscribe(computers => this.articles = computers);
  }

  delete(id: string): void {
    this.service.delete(id);
    location.reload();
  }

}
