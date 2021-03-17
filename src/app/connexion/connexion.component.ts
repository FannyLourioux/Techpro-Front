import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  connexion(x:any){
    let data = x.value;
    console.log(data);

    
  }

}
