import { TestBed } from '@angular/core/testing';

import { ProductionLineBaggingService } from './production-line-bagging.service';

describe('ProductionLineBaggingService', () => {
  let service: ProductionLineBaggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionLineBaggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
