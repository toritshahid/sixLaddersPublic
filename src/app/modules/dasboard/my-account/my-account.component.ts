import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
