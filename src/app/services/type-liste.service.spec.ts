import { TestBed } from '@angular/core/testing';

import { TypeListeService } from './type-liste.service';

describe('TypeListeService', () => {
  let service: TypeListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
