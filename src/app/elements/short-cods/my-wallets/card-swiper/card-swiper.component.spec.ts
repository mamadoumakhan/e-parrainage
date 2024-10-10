import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSwiperComponent } from './card-swiper.component';

describe('CardSwiperComponent', () => {
  let component: CardSwiperComponent;
  let fixture: ComponentFixture<CardSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
