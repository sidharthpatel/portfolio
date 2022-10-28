import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleSwitchService {
  switchToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  returnSwitchOnOff(value: boolean): void {
    this.switchToggle.emit(value);
  }
}
