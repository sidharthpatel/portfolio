import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProjectsComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
