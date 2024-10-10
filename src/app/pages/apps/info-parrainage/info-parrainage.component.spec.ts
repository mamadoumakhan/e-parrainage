import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoParrainageComponent } from './info-parrainage.component';

describe('InfoParrainageComponent', () => {
  let component: InfoParrainageComponent;
  let fixture: ComponentFixture<InfoParrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoParrainageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
