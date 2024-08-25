import { Component, OnInit } from '@angular/core';
import { ProductionLineBaggingService } from './services/production-line-bagging.service';
import { take } from 'rxjs';
import { Machine } from './models/machine.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  machines!: Machine[];

  constructor(private productionLineService: ProductionLineBaggingService) {}

  ngOnInit(): void {
    this.productionLineService
      .getProductionLineData()
      .pipe(take(1))
      .subscribe((data) => {
        this.machines = data;
      });
  }
}
