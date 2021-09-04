import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service: ThemeService) { }

  ngOnInit(): void {
    this.service.selectTheme()
  }

}
