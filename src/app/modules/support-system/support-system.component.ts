import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-support-system',
  templateUrl: './support-system.component.html',
  styleUrls: ['./support-system.component.css']
})
export class SupportSystemComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery','main', 'carousel', 'carouselSlick', 'JQuery1', 'main', 'bootstrap','script', 'swiper', 'wow').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
