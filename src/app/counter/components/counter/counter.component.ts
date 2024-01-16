import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h5>Contador: {{counter}}</h5>
  <hr>
  <button (click)="increase_by(1)">+1</button>
  <button (click)="resetCounter()">RESET</button>
  <button (click)="increase_by(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  counter: number = 10;


  increase_by(value:number){
    this.counter +=value
  }
  resetCounter(){
    this.counter =10;
  }


}

// import { Component } from "@angular/core";

// @Component({
//   template: '<h1>Hola Counter</h1>',
//   selector: 'app-counter'
// })
// export class CounterComponent {


// }
