import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/element';
import { StockageService } from '../stockage.service';

@Component({
  selector: 'app-cle-usb',
  templateUrl: '../../element-layout.html',
  styleUrls: ['../../element-layout.css'],
  providers: [StockageService]
})
export class CleUsbComponent implements OnInit {
  articles: Article[] = [];
  constructor(private service: StockageService) { }

  ngOnInit(): void {
    this.service.getUsb().subscribe(usbs => this.articles = usbs);
  }

  delete(id: string): void {
    this.service.delete(id);
    location.reload();
  }

}
