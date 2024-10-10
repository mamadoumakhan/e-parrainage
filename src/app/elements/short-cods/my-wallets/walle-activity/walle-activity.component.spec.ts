import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalleActivityComponent } from './walle-activity.component';

describe('WalleActivityComponent', () => {
  let component: WalleActivityComponent;
  let fixture: ComponentFixture<WalleActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalleActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
