import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeParrainageComponent } from './type-parrainage.component';

describe('TypeParrainageComponent', () => {
  let component: TypeParrainageComponent;
  let fixture: ComponentFixture<TypeParrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeParrainageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
