import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
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

@Component({
  selector: 'app-bean-flavor-update',
  standalone: true,
  imports: [
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
  ],
  templateUrl: './bean-flavor-update.component.html',
  styleUrls: ['./bean-flavor-update.component.css'],
})
export class BeanFlavorUpdateComponent implements OnChanges {
  validateForm: FormGroup<{
    FlavorName: FormControl<string>;
    Description: FormControl<string>;
    Ingredients: FormControl<string>;
  }>;

  @Input() beanFlavor: any;
  @Output() beanFlavorUpdate = new EventEmitter<void>();

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    this.validateForm = this.fb.group({
      FlavorName: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Ingredients: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['beanFlavor']) {
      this.setFormValues();
    }
  }

  setFormValues(): void {
    if (this.beanFlavor) {
      this.validateForm.setValue({
        FlavorName: this.beanFlavor.FlavorName,
        Description: this.beanFlavor.Description,
        Ingredients: this.beanFlavor.Ingredients,
      });
    }
  }

  submitFormUpdate(): void {
    if (this.validateForm.valid) {
      this.apiService
        .updateBeanFlavor(this.beanFlavor.id, this.validateForm.value)
        .subscribe(() => {
          this.createNotification(
            'success',
            `${this.validateForm.value.FlavorName} ${this.validateForm.value.Description}`,
            'The Product has been updated successfully!'
          );
          this.beanFlavorUpdate.emit();
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
}
