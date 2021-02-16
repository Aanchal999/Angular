import { TestBed } from '@angular/core/testing';

import { GetcallService } from './getcall.service';

describe('GetcallService', () => {
  let service: GetcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
