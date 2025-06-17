import { TestBed } from '@angular/core/testing';

import { FrequentFlyerService } from './frequent-flyer.service';

describe('FrequentFlyerService', () => {
  let service: FrequentFlyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequentFlyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
