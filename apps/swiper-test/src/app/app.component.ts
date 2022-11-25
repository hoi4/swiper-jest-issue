import { Component } from '@angular/core';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

@Component({
  selector: 'swiper-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected slides: number[] = [1, 2, 3, 4, 5];
}
