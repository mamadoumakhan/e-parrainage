import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranasactionsComponent } from './tranasactions.component';

describe('TranasactionsComponent', () => {
  let component: TranasactionsComponent;
  let fixture: ComponentFixture<TranasactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranasactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranasactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
