import { TestBed } from '@angular/core/testing';

import { TelephoneService } from './telephone.service';

describe('ServiceService', () => {
  let service: TelephoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelephoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
