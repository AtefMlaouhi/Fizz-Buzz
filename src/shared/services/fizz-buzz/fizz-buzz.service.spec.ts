import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service).toBeTruthy();
  });

  it('getFizzBuzzFromNumber(0) should return `oops`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);

    service.getFizzBuzzFromNumber('0').subscribe((result: string[]) => {
      expect(result.length).toEqual(1);
      expect(result[0]).toEqual('oops');
    });
  });

});
