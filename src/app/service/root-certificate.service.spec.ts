import { TestBed } from '@angular/core/testing';

import { RootCertificateService } from './root-certificate.service';

describe('RootCertificateService', () => {
  let service: RootCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
