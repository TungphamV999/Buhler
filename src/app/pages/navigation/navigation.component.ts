import { Component, Input } from '@angular/core';
import { Machine, MachineVM } from '../../models/machine.model';
import {
  machineIconMap,
  productionLineStatusIconMap,
} from '../../constants/production-line-const';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  machinesVW!: MachineVM[];
  @Input({ required: true }) set machines(data: Machine[]) {
    this.machinesVW = data.map((machine) => ({
      ...machine,
      statusIcon: productionLineStatusIconMap.get(machine.state)!,
    }));
  }
}
