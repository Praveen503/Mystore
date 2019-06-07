import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.css']
})
export class FormsLoginComponent implements OnInit {
ngifvariable=false;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     console.log(this.route.url);

      })

}
}
