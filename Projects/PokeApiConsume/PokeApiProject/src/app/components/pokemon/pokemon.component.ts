import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import {
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { Input } from '@angular/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';

import { Result } from '../../interfaces/PokeApi';
import { NgStyle, TitleCasePipe } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
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
    NzCardModule,
    TitleCasePipe,
    NzRowDirective,
    NgStyle,
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnChanges {
  @Input() data?: Result;
  id: string = '0';
  Pokemon: Pokemon = {} as Pokemon;
  constructor(private apiService: PokeApiService) {}

  ngOnChanges() {
    this.extrarInformacionPokemon();
  }

  extrarInformacionPokemon() {
    if (this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.apiService.getById(this.id).subscribe((data: any) => {
        this.Pokemon = data;
      });
    }
  }

  pokemonTypes() {
    let types: string = '';
    this.Pokemon.types.forEach((element) => {
      if ((element.slot = 0)) {
        types += element.type.name + ', ';
      } else if ((element.slot = 1)) {
        types += element.type.name + ', ';
      } else {
        types += element.type.name + ', ';
      }
    });
    //   console.log(element);
    //   types += element.type.name + ', ';
    // });

    return types.substring(0, types.length - 2);
  }
}
