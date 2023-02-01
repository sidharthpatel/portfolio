import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      if(scrollPercent * 100 >= 100) {
        scrollPercent = 1;
      }
      let scrollBarElement = document.getElementById('scrollBar');
      scrollBarElement.setAttribute('style', 'width: ' + scrollPercent*100 + '%');
    });
  }
}
