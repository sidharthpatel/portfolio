import { Component, OnInit } from '@angular/core';
import { ToggleSwitchService } from '../services/toggle-switch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contactMe: String;
  constructor(private toggleSwitchService: ToggleSwitchService) {}

  ngOnInit() {
    this.contactMe = 'mailto:sidharthpatel012@gmail.com';
    this.toggleSwitchService.switchToggle.subscribe((darkModeStatus) => {

    });
  }
}
