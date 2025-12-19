import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { TechnologyNamePipe } from "./shared/pipes/technology-name.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TechnologyNamePipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
