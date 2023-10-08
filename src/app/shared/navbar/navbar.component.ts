import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {}
  //#region Variables
  companyName: string = 'SuperMarket';
  loginModalVisible: boolean = false;
  navTabs: { TabName: string; TabRedirect: string }[] = [
    {
      TabName: 'HomePage',
      TabRedirect: '/homepage',
    },
  ];
  // email: string;
  // password: string;
  // rememberMe: boolean;
  //#endregion

  navListClick(tab: { TabName: string; TabRedirect: string }) {
    this.router.navigate([tab.TabRedirect]);
  }
  openLoginModal() {
    this.loginModalVisible = true;
  }
  registerButtonClick() {}
  loginButtonClick() {}
  navigateToRegistration() {}
  navigateToLogin() {}
  forgetPassword() {}
  dismissLoginModal() {
    this.loginModalVisible = false;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  login() {
    // Handle login logic here
  }

  forgotPassword() {
    // Handle forgot password logic here
  }

  openRegistration() {
    // Handle opening registration form logic here
  }
  async toggleModal() {
    const modal = await this.modalController.create({
      id: 'authenticationModal',
      component: NavbarComponent,
    });
    return await modal.present();
  }
}
