import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-frontend';

  constructor(){}

  ngOnInit() {
    //jQuery("#myselector").style="display: none;";
  }
}
