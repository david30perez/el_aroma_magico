import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CoffeeListComponent],
      providers: [
        {
          provide: CoffeeService,
          useValue: { getCoffees: () => of([]) },
        },
      ],
    });
    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the coffee table and zero type totals when the catalog is empty', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Nombre');
    expect(text).toContain('Total café de origen: 0');
    expect(text).toContain('Total café blend: 0');
  });
});
