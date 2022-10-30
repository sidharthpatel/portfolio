import { Component, OnInit } from '@angular/core';
import { ToggleSwitchService } from '../services/toggle-switch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  darkMode: boolean = false;
  constructor(private toggleSwitchService: ToggleSwitchService) {}

  ngOnInit() {
    this.toggleSwitchService.switchToggle.subscribe((darkModeStatus) => {
      this.darkMode = darkModeStatus;
      // console.log(this.darkMode);
    });
  }
}
