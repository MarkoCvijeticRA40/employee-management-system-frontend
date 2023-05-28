import { TestBed } from '@angular/core/testing';

import { RegistratioRequestService } from './registratio-request.service';

describe('RegistratioRequestService', () => {
  let service: RegistratioRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistratioRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
