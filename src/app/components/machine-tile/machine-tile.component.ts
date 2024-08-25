import { Component, Input } from '@angular/core';
import {
  machineIconMap,
  productionLineStatusIconMap,
} from '../../constants/production-line-const';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-machine-tile',
  templateUrl: './machine-tile.component.html',
  styleUrl: './machine-tile.component.scss',
})
export class MachineTileComponent {
  @Input({ required: true }) machine!: Machine;
  statusIcon!: string;
  machineIcon!: string;

  ngOnInit(): void {
    this.statusIcon = productionLineStatusIconMap.get(this.machine.state)!;
    this.machineIcon = machineIconMap.get(this.machine.name)!;
  }
}
