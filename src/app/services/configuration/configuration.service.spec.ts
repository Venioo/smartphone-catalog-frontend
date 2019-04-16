import { TestBed } from '@angular/core/testing';

import { Configuration } from './configuration.service';

describe('ConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Configuration = TestBed.get(Configuration);
    expect(service).toBeTruthy();
  });
});
