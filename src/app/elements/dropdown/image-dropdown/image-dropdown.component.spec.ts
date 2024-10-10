import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDropdownComponent } from './image-dropdown.component';

describe('ImageDropdownComponent', () => {
  let component: ImageDropdownComponent;
  let fixture: ComponentFixture<ImageDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
