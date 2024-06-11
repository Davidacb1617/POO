import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { BeanFlavor } from '../../interfaces/bean-flavor';
import { BeanFlavorListComponent } from '../bean-flavor-list/bean-flavor-list.component';
@Component({
  selector: 'app-bean-flavor',
  standalone: true,
  imports: [BeanFlavorListComponent],
  templateUrl: './bean-flavor.component.html',
  styleUrl: './bean-flavor.component.css',
})
export class BeanFlavorComponent implements OnInit {


  ngOnInit() {
  }

}
