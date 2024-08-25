import { Component, Input } from '@angular/core';
import { Machine, MachineVM } from '../../models/machine.model';
import {
  machineIconMap,
  productionLineStatusIconMap,
} from '../../constants/production-line-const';

@Component({
  selector: 'app-machines-overview',
  templateUrl: './machines-overview.component.html',
  styleUrl: './machines-overview.component.scss',
})
export class MachinesOverviewComponent {
  machinesVW!: MachineVM[];
  @Input({ required: true }) set machines(data: Machine[]) {
    this.machinesVW = data.map((machine) => ({
      ...machine,
      statusIcon: productionLineStatusIconMap.get(machine.state)!,
      machineIcon: machineIconMap.get(machine.name)!,
    }));
  }
}
