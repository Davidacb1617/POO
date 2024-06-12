import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { BeanFlavor } from '../../interfaces/bean-flavor';
import { BeanFlavorListComponent } from '../bean-flavor-list/bean-flavor-list.component';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApiService } from '../../services/api.service';
import {
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { Validators as MyValidators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BeanFlavorUpdateComponent } from '../bean-flavor-update/bean-flavor-update.component';

@Component({
  selector: 'app-bean-flavor',
  standalone: true,
  imports: [
    BeanFlavorListComponent,
    ReactiveFormsModule,
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzColDirective,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
    BeanFlavorListComponent,
    BeanFlavorUpdateComponent,
    CommonModule,
  ],
  templateUrl: './bean-flavor.component.html',
  styleUrl: './bean-flavor.component.css',
})
export class BeanFlavorComponent implements OnInit {
  selectedBeanFlavor: any;

  validateForm: FormGroup<{
    FlavorName: FormControl<string>;
    Description: FormControl<string>;
    Ingredients: FormControl<string>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    const { required } = MyValidators;
    this.validateForm = this.fb.group({
      FlavorName: ['', [required]],
      Description: ['', [required]],
      Ingredients: ['', [required]],
    });
  }
  ngOnInit() {}

  submitFormBeanFlavor(): void {
    if (this.validateForm.valid) {
      this.apiService
        .createBeanFlavor(this.validateForm.value)
        .subscribe(() => {
          this.createNotification(
            'success',
            `${this.validateForm.value.FlavorName} ${this.validateForm.value.Description}`,
            'The Bean Flavor has been created successfully!'
          );
          this.validateForm.reset();
        });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }

  editBeanFlavor(product: any): void {
    this.selectedBeanFlavor = product;
  }

  onBeanFlavorUpdated(): void {
    this.selectedBeanFlavor = null;
  }
}
