import { TestBed } from '@angular/core/testing';

import { LoguinService } from './loguin.service';

describe('LoguinService', () => {
  let service: LoguinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoguinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
