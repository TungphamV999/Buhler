import { Component, Input, OnInit } from '@angular/core';
import { productionLineStatusIconMap } from '../../constants/production-line-const';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-navigation-tile',
  templateUrl: './navigation-tile.component.html',
  styleUrl: './navigation-tile.component.scss',
})
export class NavigationTileComponent implements OnInit {
  @Input({ required: true }) machine!: Machine;
  icon!: string;

  ngOnInit(): void {
    this.icon = productionLineStatusIconMap.get(this.machine.state)!;
  }
}
