import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main_pages/home/home.component';
import { HeaderComponent } from './main_pages/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './main_pages/footer/footer.component';
import { CarrerCoachingComponent } from './main_pages/carrer-coaching/carrer-coaching.component';
import { FeaturedCompaniesComponent } from './main_pages/featured-companies/featured-companies.component';
import { BlogComponent } from './main_pages/blog/blog.component';
import { LoginComponent } from './main_pages/login/login.component';
import { PostAJobComponent } from './main_pages/post-ajob/post-ajob.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AskUsAnythingComponent } from './main_pages/ask-us-anything/ask-us-anything.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarrerCoachingComponent,
    FeaturedCompaniesComponent,
    BlogComponent,
    LoginComponent,
    PostAJobComponent,
    AskUsAnythingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
