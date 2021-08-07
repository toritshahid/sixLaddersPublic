import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAJobRoutingModule } from './post-ajob-routing.module';
import { PostAJobComponent } from './post-ajob.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    PostAJobComponent,
  ],
  imports: [
    CommonModule,
    PostAJobRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PostAJobModule { }
