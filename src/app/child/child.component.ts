import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button class='btn btn-primary' (click)="handleclick()">ClickMe!!</button>`
  // templateUrl: './child.component.html',
 
})
export class ChildComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  counter=0;

  handleclick(){
    console.log('hey I am  clicked in child :', +this.valueChange);
    this.counter = this.counter+1;
    this.valueChange.emit(this.counter);
  }
  constructor() { }

  ngOnInit() {
  }

}
