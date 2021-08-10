import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery1', 'bootstrap', 'script', 'swiper', 'wow').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
