import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.isMobileScreen;
    this.translate.use(this.currentLanguage);
    this.navigationForm.patchValue({ language: this.currentLanguage });
  }
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
    {
      TabName: 'HomePage',
      TabRedirect: '/homepage',
    },
    {
      TabName: 'HomePage',
      TabRedirect: '/homepage',
    },
  ];
  language: { languageName: string; languageSymbol: string }[] = [
    {
      languageName: 'English',
      languageSymbol: 'en',
    },
    {
      languageName: 'عربي',
      languageSymbol: 'ar',
    },
  ];
  currentLanguage: string = localStorage.getItem('currentLanguage') || 'en';
  searchBarBoolean: boolean = true;

  //#endregion

  navListClick(tab: { TabName: string; TabRedirect: string }) {
    console.log(tab);
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
  onChangeLanguage() {
    console.log('!');
    localStorage.setItem(
      'currentLanguage',
      this.navigationForm.controls['language'].value
    );
    this.translate.use(this.navigationForm.controls['language'].value);
    location.reload();
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
  navigationForm: FormGroup = this.formBuilder.group({
    language: [null],
  });
  handleSearchInput(event: any) {
    console.log(event);
  }
  get isMobileScreen() {
    return window.innerWidth > 991;
  }
}
