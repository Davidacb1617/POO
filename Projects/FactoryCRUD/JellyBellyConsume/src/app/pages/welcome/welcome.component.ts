import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BeanFlavor } from '../../interfaces/bean-flavor';
import { BeanFlavorComponent } from '../../components/bean-flavor/bean-flavor.component';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [BeanFlavorComponent],
})
export class WelcomeComponent implements OnInit {
  constructor(private service: ApiService) {}
  beanFlavors: BeanFlavor[] = [];
  ngOnInit(): void {
    this.getBeanFlavors();
  }

  getBeanFlavors() {
    this.service.getBeanFlavors().subscribe((data) => {
      this.beanFlavors = data;
      console.log(this.beanFlavors);
    });
  }
}
