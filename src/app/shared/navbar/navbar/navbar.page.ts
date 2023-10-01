import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  navTabs: [TabName: string, TabRedirect: string][] = [
    ['Home', '/home'],
    ['About', '/About'],
    ['Services', '/Services'],
  ];

  navListClick(tab: any, i: number) {
    console.log(tab, i);
  }

  companyName:string = "SuperMarket"
}
