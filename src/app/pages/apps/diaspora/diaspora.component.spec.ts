import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasporaComponent } from './diaspora.component';

describe('DiasporaComponent', () => {
  let component: DiasporaComponent;
  let fixture: ComponentFixture<DiasporaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiasporaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiasporaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
