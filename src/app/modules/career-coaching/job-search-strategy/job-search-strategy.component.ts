import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-job-search-strategy',
  templateUrl: './job-search-strategy.component.html',
  styleUrls: ['./job-search-strategy.component.css']
})
export class JobSearchStrategyComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','bootstrap', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
