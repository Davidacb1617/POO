import { Component, Output, OnInit } from '@angular/core';
import { BeanFlavor } from '../../interfaces/bean-flavor';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bean-flavor-list',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzButtonModule],
  templateUrl: './bean-flavor-list.component.html',
  styleUrl: './bean-flavor-list.component.css',
  host: {
    ngSkipHydration: '',
  },
})
export class BeanFlavorListComponent implements OnInit {
  beanFlavors: BeanFlavor[] = [];
  @Output() selectedBeanFlavor = new EventEmitter<BeanFlavor>();

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.loadBeanFlavor();
  }

  loadBeanFlavor() {
    this.service.getBeanFlavors().subscribe((data: BeanFlavor[]) => {
      this.beanFlavors = data;
    });
  }

  selectBeanFlavor(beanFlavor: BeanFlavor) {
    this.selectedBeanFlavor.emit(beanFlavor);
  }
  
  deleteBeanFlavor(id: string) {
    this.service.deleteBeanFlavor(id).subscribe(() => {
      this.loadBeanFlavor();
    });
  }
}
