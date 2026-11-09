import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: false,
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffees: Coffee[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private coffeeService: CoffeeService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCoffees();
  }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.loading = false;
      this.changeDetector.markForCheck();
    });
  }

  get originCoffeeCount(): number {
    return this.coffees.filter((coffee) => coffee.tipo === 'Café de Origen').length;
  }

  get blendCoffeeCount(): number {
    return this.coffees.filter((coffee) => coffee.tipo === 'Blend').length;
  }

}
