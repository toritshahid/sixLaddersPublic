import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-new-career-exploration',
  templateUrl: './new-career-exploration.component.html',
  styleUrls: ['./new-career-exploration.component.css']
})
export class NewCareerExplorationComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','bootstrap','carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
