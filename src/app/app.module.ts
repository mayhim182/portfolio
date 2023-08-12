import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navigationBar/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';



import { HomeComponent } from './mainScreen/home/home.component';
import { StatsComponent } from './mainScreen/stats/stats.component';
import { PersonalProjectsComponent } from './mainScreen/personal-projects/personal-projects.component';
import { CodePensComponent } from './codepens/code-pens/code-pens.component';
import { AnimateComponent } from './animations/animate/animate.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StatsComponent,
    PersonalProjectsComponent,
    CodePensComponent,
    AnimateComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
