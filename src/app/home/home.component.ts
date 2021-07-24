import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  block1 = 'assets/img/homepage/earth.svg';
  constructor() { }

  ngOnInit(): void {
  }
  getBlock1(): any{
    return "url('assets/img/homepage/earth.svg')";
  }

}
