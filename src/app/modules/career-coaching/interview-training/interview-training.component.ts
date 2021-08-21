import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-interview-training',
  templateUrl: './interview-training.component.html',
  styleUrls: ['./interview-training.component.css']
})
export class InterviewTrainingComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','bootstrap', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }


  ngOnInit(): void {
  }

}
