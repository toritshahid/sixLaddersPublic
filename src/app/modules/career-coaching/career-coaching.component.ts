import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/_services/theme.service';
import { ScriptService } from '../../shared/scripts.service';
@Component({
  selector: 'app-career-coaching',
  templateUrl: './career-coaching.component.html',
  styleUrls: ['./career-coaching.component.css']
})
export class CareerCoachingComponent implements OnInit {

  constructor(private script: ScriptService, private service: ThemeService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.service.selectTheme()
  }

}
