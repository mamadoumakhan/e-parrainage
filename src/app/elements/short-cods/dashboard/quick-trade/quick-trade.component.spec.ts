import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTradeComponent } from './quick-trade.component';

describe('QuickTradeComponent', () => {
  let component: QuickTradeComponent;
  let fixture: ComponentFixture<QuickTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickTradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
