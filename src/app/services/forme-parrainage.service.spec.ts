import { TestBed } from '@angular/core/testing';

import { FormeParrainageService } from './forme-parrainage.service';

describe('FormeParrainageService', () => {
  let service: FormeParrainageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormeParrainageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
