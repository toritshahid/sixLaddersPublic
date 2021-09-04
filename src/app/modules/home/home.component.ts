import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private script: ScriptService, private service: ThemeService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
    // this.service.selectTheme();
  }

}
