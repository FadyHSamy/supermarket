import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  constructor() {}
  spinner: boolean = false;
  carouselItems = [
    {
      src: 'https://cdnprod.mafretailproxy.com/assets/images/web_en_f28793a2cc.gif',
      alt: 'First slide',
    },
    {
      src: 'https://cdnprod.mafretailproxy.com/assets/images/Homepage_Hero_Banner_Desktop_1232x280_English_50b5cbbd67.png',
      alt: 'Second slide',
    },
    {
      src: 'https://cdnprod.mafretailproxy.com/assets/images/Homepage_Hero_Banner_Desktop_1232x280_English_6ad798fe9d.png',
      alt: 'Third slide',
    },
  ];
  currentIndex = 0;
  intervalSubscription: Subscription | undefined;

  ngOnInit() {
    this.startCarousel();
  }

  nextCarouselArrow() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  previousCarouselArrow() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselItems.length) %
      this.carouselItems.length;
  }

  startCarousel() {
    this.intervalSubscription = interval(3000).subscribe(() => {
      this.nextCarouselArrow();
    });
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
