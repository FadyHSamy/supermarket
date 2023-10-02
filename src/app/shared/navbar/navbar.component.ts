import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  navTabs: [TabName: string, TabRedirect: string][] = [
    ['Home', '/home'],
    ['About', '/About'],
    ['Services', '/Services'],
  ];

  navListClick(tab: any, i: number) {
    console.log(tab, i);
  }

  companyName: string = 'SuperMarket';
}
