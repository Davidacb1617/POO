import { Component, OnChanges, SimpleChanges } from '@angular/core';
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

@Component({
  selector: 'app-bean-flavor-update',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './bean-flavor-update.component.html',
  styleUrl: './bean-flavor-update.component.css'
})
export class BeanFlavorUpdateComponent implements OnChanges{

  constructor(){}
  
  ngOnChanges(){
  
}
}
