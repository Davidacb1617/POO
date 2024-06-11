import { Component, Input } from '@angular/core';
import { BeanFlavor } from '../../interfaces/bean-flavor';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-bean-flavor',
  standalone: true,
  imports: [],
  templateUrl: './bean-flavor.component.html',
  styleUrl: './bean-flavor.component.css',
})
export class BeanFlavorComponent implements OnInit {
  @Input() data?: BeanFlavor;
  ngOnInit(): void {}
}
