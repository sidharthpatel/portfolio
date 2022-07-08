import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contactMe: string;
  constructor() {}

  ngOnInit() {
    this.contactMe = "mailto:sidharthpatel012@gmail.com"
  }
}
