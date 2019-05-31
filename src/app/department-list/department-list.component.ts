import { Component,
         OnInit,
         EventEmitter,
         Output } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {

  @Output()
  gana:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.gana.emit()
  }
}
