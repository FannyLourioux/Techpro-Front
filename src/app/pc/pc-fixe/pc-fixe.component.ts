import { Component, OnInit } from '@angular/core';
import { Pc } from '../Pc';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-pc-fixe',
  templateUrl: '../../element-layout.html',
  styleUrls: ['./pc-fixe.component.css'],
  providers: [PcService]
})
export class PcFixeComponent implements OnInit {
  computers: Array<Pc> = [];
  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.service.getDesktops().subscribe(computers => this.computers = computers);
  }

}
