import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeParrainageComponent } from './forme-parrainage.component';

describe('FormeParrainageComponent', () => {
  let component: FormeParrainageComponent;
  let fixture: ComponentFixture<FormeParrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormeParrainageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormeParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
