import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { ScriptService } from 'src/app/shared/scripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private script: ScriptService, private darkModeService: DarkModeService) {
    this.script.load('main').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }
  onToggle(): void {
    this.darkModeService.toggle();
  }


}
