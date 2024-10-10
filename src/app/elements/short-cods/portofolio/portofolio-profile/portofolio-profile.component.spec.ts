import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioProfileComponent } from './portofolio-profile.component';

describe('PortofolioProfileComponent', () => {
  let component: PortofolioProfileComponent;
  let fixture: ComponentFixture<PortofolioProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofolioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
