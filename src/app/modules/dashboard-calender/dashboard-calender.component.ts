import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-dashboard-calender',
  templateUrl: './dashboard-calender.component.html',
  styleUrls: ['./dashboard-calender.component.css']
})
export class DashboardCalenderComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
