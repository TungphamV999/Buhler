import { Component, Input } from '@angular/core';
import { MachineVM } from '../../models/machine.model';

@Component({
  selector: 'app-machine-tile',
  templateUrl: './machine-tile.component.html',
  styleUrl: './machine-tile.component.scss',
})
export class MachineTileComponent {
  @Input({ required: true }) machine!: MachineVM;
}
