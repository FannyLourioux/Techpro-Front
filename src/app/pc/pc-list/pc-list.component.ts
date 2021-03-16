import { Component, OnInit } from '@angular/core';
import { Pc } from '../Pc';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: '../../element-layout.html',
  styleUrls: ['./pc-list.component.css'],
  providers: [PcService]
})
export class PcListComponent implements OnInit {
  computers: Array<Pc> = [];
  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.service.getComputers().subscribe(computers => this.computers = computers);
  }

}
