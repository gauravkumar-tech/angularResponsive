import { TestBed } from '@angular/core/testing';

import { RepairSaveService } from './repair-save.service';

describe('RepairSaveService', () => {
  let service: RepairSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
