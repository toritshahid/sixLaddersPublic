import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private script: ScriptService, private service: ThemeService) {
    this.script.load('main').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.service.selectTheme()
  }
  selectTheme(){
    this.service.selectTheme()
  }

}
