import { Component, OnInit } from '@angular/core';
import { ToggleSwitchService } from 'src/app/services/toggle-switch.service';

@Component({
  selector: 'app-dark-theme',
  templateUrl: './dark-theme.component.html',
  styleUrls: ['./dark-theme.component.css'],
})
export class DarkThemeComponent implements OnInit {
  darkMode: boolean = false;
  contactMe: string;
  constructor(private toggleSwitchService: ToggleSwitchService) {}

  ngOnInit(): void {
    this.toggleSwitchService.switchToggle.subscribe((darkModeStatus) => {
      this.darkMode = darkModeStatus;
    });
    this.contactMe = 'mailto:sidharthpatel012@gmail.com';
  }
}
