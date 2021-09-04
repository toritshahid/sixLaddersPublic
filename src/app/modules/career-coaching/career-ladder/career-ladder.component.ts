import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-career-ladder',
  templateUrl: './career-ladder.component.html',
  styleUrls: ['./career-ladder.component.css']
})
export class CareerLadderComponent implements OnInit {

  constructor(private script: ScriptService, private service: ThemeService) {
    this.script.load('JQuery','bootstrap','carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.service.selectTheme()
  }

}
