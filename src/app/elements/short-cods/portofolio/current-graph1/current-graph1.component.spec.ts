import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGraph1Component } from './current-graph1.component';

describe('CurrentGraph1Component', () => {
  let component: CurrentGraph1Component;
  let fixture: ComponentFixture<CurrentGraph1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentGraph1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
