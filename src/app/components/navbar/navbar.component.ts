import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  date: any;
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date().toLocaleTimeString();
    }, 1000);
  }
}
