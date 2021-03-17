import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  }
  constructor() { }

  ngOnInit(): void {
  }

}
