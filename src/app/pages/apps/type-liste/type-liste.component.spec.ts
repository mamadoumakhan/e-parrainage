import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeListeComponent } from './type-liste.component';

describe('TypeListeComponent', () => {
  let component: TypeListeComponent;
  let fixture: ComponentFixture<TypeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
