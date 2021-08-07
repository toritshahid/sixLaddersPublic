import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-ask-us-anything',
  templateUrl: './ask-us-anything.component.html',
  styleUrls: ['./ask-us-anything.component.css']
})
export class AskUsAnythingComponent implements OnInit {

  constructor(private script: ScriptService) {
    this.script.load('JQuery1', 'bootstrap', 'script', 'swiper', 'wow').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
