import { TestBed } from '@angular/core/testing';

import { DiasporaService } from './diaspora.service';

describe('DiasporaService', () => {
  let service: DiasporaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiasporaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
