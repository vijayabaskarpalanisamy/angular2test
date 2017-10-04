import { Component, OnInit } from '@angular/core';
//import { CounterService } from "./counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number;

  ff: string;
  name: string;
  id: number;
  address: Address;
  flowers: string[];
  // posts:post[];
  constructor() {
    this.counter = 1;
  }

  ngOnInit() {
    this.name = "Brighty";
    this.id = 77;
    this.address = {
      street: 'mayura nagar',
      city: 'salem',
      pincode: 638476
    }
    this.flowers = ['Rose', 'jasmine', 'lily', 'lotus', 'sunflower'];


    }

  onclick() {
    this.flowers.push("flowerssss");
  }


  offclick() {
    this.flowers.pop();
  }


  submitted(ff) {
    this.flowers.unshift(ff);
    return false;
  }


  delete(f) {
    for (var i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i] == f)
        this.flowers.splice(i, 1);
    }
  }


  increment() {
    this.counter++;
  }


  decrement() {
    this.counter--;
  }


  display() {
    this.counter;
  }


  display1() {
    this.counter;
  }



  submit(name) {
    this.name = name;
  }


}

interface Address {

  street: string,
  city: string,
  pincode: number
}

/*interface post{

  id: number,
  title:string,
  body:string,
  user:number
}*/

