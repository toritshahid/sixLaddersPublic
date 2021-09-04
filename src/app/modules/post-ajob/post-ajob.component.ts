import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-post-ajob',
  templateUrl: './post-ajob.component.html',
  styleUrls: ['./post-ajob.component.css']
})
export class PostAJobComponent implements OnInit {

  constructor(private service: ThemeService) { }

  ngOnInit(): void {
    this.service.selectTheme()
  }

}
