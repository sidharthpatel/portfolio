import { Component, OnInit } from '@angular/core';
import { ToggleSwitchService } from 'src/app/services/toggle-switch.service';

@Component({
  selector: 'app-light-theme',
  templateUrl: './light-theme.component.html',
  styleUrls: ['./light-theme.component.css'],
})
export class LightThemeComponent implements OnInit {
  contactMe: string;
  constructor() {}

  ngOnInit(): void {
    this.contactMe = 'mailto:sidharthpatel012@gmail.com';
  }
}
