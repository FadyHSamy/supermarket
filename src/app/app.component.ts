import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [{ title: 'HomePage', url: '/homepage', icon: 'home' }];
  constructor() {}
  company: string = 'SuperMarket';
  textDirection: string =
    localStorage.getItem('currentLanguage') == 'en' ? 'ltr' : 'rtl';
}
