import { TestBed } from '@angular/core/testing';

import { WatchmanGuard } from './watchman.guard';

describe('WatchmanGuard', () => {
  let guard: WatchmanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WatchmanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
