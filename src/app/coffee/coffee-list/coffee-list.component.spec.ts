import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async () => {
    const coffees = [
      new Coffee(1, 'Café Especial para ti', 'Blend', 'Angelópolis, Antioquia', 'Panela', 1920, ''),
      new Coffee(2, 'Café Navegante', 'Café de Origen', 'Guatapé, Antioquia', 'Frutas', 1800, ''),
      new Coffee(3, 'Café Valentina', 'Café de Origen', 'Fredonia, Antioquia', 'Caramelo', 1700, ''),
    ];

    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CoffeeListComponent],
      providers: [
        {
          provide: CoffeeService,
          useValue: { getCoffees: () => of(coffees) },
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

  it('renders three coffee rows and one table header', () => {
    const element: HTMLElement = fixture.nativeElement;
    const table = element.querySelector('table');

    expect(table).not.toBeNull();
    expect(table?.querySelectorAll('thead tr').length).toBe(1);
    expect(table?.querySelectorAll('tbody tr').length).toBe(3);
    expect(table?.querySelectorAll('tr').length).toBe(4);
    expect(table?.textContent).toContain('Café Especial para ti');
    expect(table?.textContent).toContain('Café Navegante');
    expect(table?.textContent).toContain('Café Valentina');
  });
});
