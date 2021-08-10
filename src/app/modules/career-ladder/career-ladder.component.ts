import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-career-ladder',
  templateUrl: './career-ladder.component.html',
  styleUrls: ['./career-ladder.component.css']
})
export class CareerLadderComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery1', 'bootstrap', 'script', 'swiper', 'wow').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
