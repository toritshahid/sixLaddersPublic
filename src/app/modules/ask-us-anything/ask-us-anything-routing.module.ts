import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskUsAnythingComponent } from './ask-us-anything.component';

const routes: Routes = [{ path: '', component: AskUsAnythingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskUsAnythingRoutingModule { }
