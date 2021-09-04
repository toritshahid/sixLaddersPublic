import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service: ThemeService) { }

  ngOnInit(): void {
    this.service.selectTheme();
  }

}
