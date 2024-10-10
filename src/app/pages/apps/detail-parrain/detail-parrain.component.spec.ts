import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailParrainComponent } from './detail-parrain.component';

describe('DetailParrainComponent', () => {
  let component: DetailParrainComponent;
  let fixture: ComponentFixture<DetailParrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailParrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailParrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
