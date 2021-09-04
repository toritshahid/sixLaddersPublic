import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-featured-companies',
  templateUrl: './featured-companies.component.html',
  styleUrls: ['./featured-companies.component.css']
})
export class FeaturedCompaniesComponent implements OnInit {

  constructor(private script: ScriptService, private service: ThemeService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.service.selectTheme();
  }

}
