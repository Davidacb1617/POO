import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApiService } from '../../services/api.service';
import { Validators as MyValidators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bean-flavor-update',
  standalone: true,
  imports: [],
  templateUrl: './bean-flavor-update.component.html',
  styleUrl: './bean-flavor-update.component.css'
})
export class BeanFlavorUpdateComponent implements OnChanges{
@Input() beanFlavor: any;
@Output() updateBeanFlavor = new EventEmitter<any>();

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
validateForm: FormGroup<{
  FlavorName: FormControl<string>;
  Description: FormControl<string>;
  Ingredients: FormControl<string>;
}>;

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



createNotification(type: string, title: string, message: string): void {
  this.notification.create(type, title, message);
}
}
