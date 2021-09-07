import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../shared/scripts.service';
@Component({
  selector: 'app-career-coaching',
  templateUrl: './career-coaching.component.html',
  styleUrls: ['./career-coaching.component.css']
})
export class CareerCoachingComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
