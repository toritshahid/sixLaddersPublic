import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInOutAnimation } from './shared/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInOutAnimation
  ],
  host: { '[@slideInOutAnimation]': '' }
})
export class AppComponent implements OnInit {
  title = 'sixLaders';
  constructor() {
  }
  ngOnInit() {

}
}
