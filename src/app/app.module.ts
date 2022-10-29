import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { LightThemeComponent } from './home/light-theme/light-theme.component';
import { DarkThemeComponent } from './home/dark-theme/dark-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToggleSwitchComponent,
    LightThemeComponent,
    DarkThemeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
