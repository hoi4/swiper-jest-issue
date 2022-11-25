import { render } from '@testing-library/angular';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should work', async () => {
    await render(AppComponent, {
      imports: [SwiperModule],
    });
  });
});
