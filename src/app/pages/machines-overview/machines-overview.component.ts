import { Component, Input } from '@angular/core';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-machines-overview',
  templateUrl: './machines-overview.component.html',
  styleUrl: './machines-overview.component.scss',
})
export class MachinesOverviewComponent {
  @Input({ required: true }) machines!: Machine[];
}
