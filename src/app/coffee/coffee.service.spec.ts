import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { CoffeeService } from './coffee.service';

describe('Service: Coffee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeService, provideHttpClient(), provideHttpClientTesting()],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(CoffeeService);
    expect(service).toBeTruthy();
  });

  it('requests the coffee catalog from the configured endpoint', () => {
    const service = TestBed.inject(CoffeeService);
    const httpTesting = TestBed.inject(HttpTestingController);

    service.getCoffees().subscribe();

    const request = httpTesting.expectOne(environment.baseUrl);
    expect(request.request.method).toBe('GET');
    request.flush([]);
    httpTesting.verify();
  });
});
