import { TestBed } from '@angular/core/testing';

import { TypeParrainageService } from './type-parrainage.service';

describe('TypeParrainageService', () => {
  let service: TypeParrainageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeParrainageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
