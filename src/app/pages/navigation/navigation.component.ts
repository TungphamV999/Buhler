import { Component, Input } from '@angular/core';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input({ required: true }) machines!: Machine[];
}
