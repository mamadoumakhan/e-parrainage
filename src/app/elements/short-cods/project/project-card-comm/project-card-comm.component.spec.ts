import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardCommComponent } from './project-card-comm.component';

describe('ProjectCardCommComponent', () => {
  let component: ProjectCardCommComponent;
  let fixture: ComponentFixture<ProjectCardCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardCommComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCardCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
