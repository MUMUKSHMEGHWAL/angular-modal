import { TestBed, inject } from '@angular/core/testing';

import { GetCityDataService } from './get-city-data.service';

describe('GetCityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCityDataService]
    });
  });

  it('should be created', inject([GetCityDataService], (service: GetCityDataService) => {
    expect(service).toBeTruthy();
  }));
});
