import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {}
  //#region Variables
  companyName: string = 'SuperMarket';
  modalVisible: boolean = false;
  loginModalVisible: boolean = false;
  registrationModalVisible: boolean = false;
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
    this.modalVisible = true;
    this.loginModalVisible = true;
  }
  registerButtonClick() {}
  loginButtonClick() {
    console.log(
      this.loginModalForm.controls['emailAddress'].value,
      this.loginModalForm.controls['password'].value
    );
  }
  navigateToRegistration() {
    this.loginModalVisible = false;
    this.registrationModalVisible = true;
  }
  navigateToLogin() {
    this.registrationModalVisible = false;
    this.loginModalVisible = true;
  }
  forgetPassword() {}
  dismissLoginModal() {
    this.modalVisible = false;
    this.loginModalVisible = false;
    this.registrationModalVisible = false;
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

  loginModalForm: FormGroup = this.formBuilder.group({
    emailAddress: [null],
    password: [null],
  });
  registrationModalForm: FormGroup = this.formBuilder.group({
    firstName: [null],
    lastName: [null],
    emailAddress: [null],
    password: [null],
    confirmPassword: [null],
  });
}
