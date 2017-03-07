/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HandyService } from './handy.service';

describe('HandyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandyService]
    });
  });

  it('should ...', inject([HandyService], (service: HandyService) => {
    expect(service).toBeTruthy();
  }));
});
