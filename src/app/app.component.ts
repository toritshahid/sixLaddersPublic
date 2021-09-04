import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sixLaders';
  constructor(private spinner: NgxSpinnerService, private service: ThemeService) {
  }
  ngOnInit() {
    this.service.selectTheme();
}
}
