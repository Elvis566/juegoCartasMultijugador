import { TestBed } from '@angular/core/testing';

import { FirebaseSService } from './firebase-s.service';

describe('FirebaseSService', () => {
  let service: FirebaseSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
