import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { ToggleSwitchService } from '../services/toggle-switch.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css'],
})
export class ToggleSwitchComponent implements OnInit {
  constructor(private service: ToggleSwitchService) {}
  ngOnInit(): void {}
  isSwitchOn(event: Event): void {
    document.body.classList.toggle('dark-theme');
  }
}
