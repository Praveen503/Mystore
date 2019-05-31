import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Routing and Navigation';

  constructor(){}

  ngOnInit(){

  }
  displayCounter(count){
    console.log(count);
  }

}
