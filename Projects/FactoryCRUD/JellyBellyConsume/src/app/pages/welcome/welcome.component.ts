import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BeanFlavor } from '../../interfaces/bean-flavor';
import { BeanFlavorComponent } from '../../components/bean-flavor/bean-flavor.component';
import { BeanFlavorListComponent } from '../../components/bean-flavor-list/bean-flavor-list.component';
import { BeanFlavorUpdateComponent } from '../../components/bean-flavor-update/bean-flavor-update.component';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [BeanFlavorComponent, BeanFlavorListComponent, BeanFlavorUpdateComponent],
})
export class WelcomeComponent  {}
