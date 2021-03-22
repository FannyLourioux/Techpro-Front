import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  brand: string = "";
  price: number = 0;
  label: string = "";
  name: string = "";
  category: string = "";
  photo: string = "";

  changeBrand = (event: Event) => this.brand = (<HTMLSelectElement> event.target).value;
  changePrice = (event: Event) => this.price = +(<HTMLInputElement> event.target).value;
  changeLabel = (event: Event) => this.label = (<HTMLInputElement> event.target).value;
  changeName = (event: Event) => this.name = (<HTMLInputElement> event.target).value;
  changeCategory = (event: Event) => this.category = (<HTMLSelectElement> event.target).value;
  changePhoto = (event: Event) => this.photo = (<HTMLInputElement> event.target).value;

  validate = () => {
    const obj = {
      brand: this.brand,
      price: this.price,
      label: this.label,
      name: this.name,
      category: this.category,
      photo: this.photo
    };

    console.log(obj);
    obj.brand !== '' && obj.category !== '' ? this.client.post('http://localhost:8080/tech/item/', obj)
      .subscribe(value => console.log(value)) : alert('Les champs catégories et marque doivent être remplis');
    this.router.navigateByUrl('/');
  }
  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
