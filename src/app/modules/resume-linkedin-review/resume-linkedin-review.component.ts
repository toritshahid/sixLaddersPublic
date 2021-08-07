import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-resume-linkedin-review',
  templateUrl: './resume-linkedin-review.component.html',
  styleUrls: ['./resume-linkedin-review.component.css']
})
export class ResumeLinkedinREviewComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
