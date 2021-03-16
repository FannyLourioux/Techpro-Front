import { Component, OnInit } from '@angular/core';
import { Pc } from '../Pc';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: '../../element-layout.html',
  styleUrls: ['./pc-portable.component.css'],
  providers: [PcService]
})
export class PcPortableComponent implements OnInit {
  computers: Array<Pc> = [];
  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.service.getLaptops().subscribe(computers => this.computers = computers);
  }

}
