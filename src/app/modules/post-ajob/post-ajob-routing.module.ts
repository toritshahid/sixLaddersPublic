import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAJobComponent } from './post-ajob.component';

const routes: Routes = [{ path: '', component: PostAJobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAJobRoutingModule { }
