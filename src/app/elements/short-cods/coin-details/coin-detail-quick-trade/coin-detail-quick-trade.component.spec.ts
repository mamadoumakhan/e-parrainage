import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailQuickTradeComponent } from './coin-detail-quick-trade.component';

describe('CoinDetailQuickTradeComponent', () => {
  let component: CoinDetailQuickTradeComponent;
  let fixture: ComponentFixture<CoinDetailQuickTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinDetailQuickTradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinDetailQuickTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
