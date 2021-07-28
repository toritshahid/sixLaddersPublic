import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './main_pages/blog/blog.component';
import { CarrerCoachingComponent } from './main_pages/carrer-coaching/carrer-coaching.component';
import { FeaturedCompaniesComponent } from './main_pages/featured-companies/featured-companies.component';
import { HomeComponent } from './main_pages/home/home.component';
import { LoginComponent } from './main_pages/login/login.component';
import { PostAJobComponent } from './main_pages/post-ajob/post-ajob.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'careerCoaching', component: CarrerCoachingComponent},
  {path: 'featuredCompanies', component: FeaturedCompaniesComponent},
  {path: 'blogs', component: BlogComponent},
  {path: 'login', component: LoginComponent},
  {path: 'postAjob', component: PostAJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
