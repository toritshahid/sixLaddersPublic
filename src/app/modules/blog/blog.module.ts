import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BlogModule { }
