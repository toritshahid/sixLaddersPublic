import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAJobRoutingModule } from './post-ajob-routing.module';
import { PostAJobComponent } from './post-ajob.component';


@NgModule({
  declarations: [
    PostAJobComponent,
  ],
  imports: [
    CommonModule,
    PostAJobRoutingModule,
  ]
})
export class PostAJobModule { }
