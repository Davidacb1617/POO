import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/api.service';
import { NgClass, NgFor, UpperCasePipe } from '@angular/common';
import { TarjetaPokemonComponent } from '../tarjeta-pokemon/tarjeta-pokemon.component';

@Component({
  standalone: true,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  imports: [NgClass, TarjetaPokemonComponent, NgFor, UpperCasePipe],
})
export class DetalleComponent implements OnChanges {
  @Input() pokemon?: Pokemon;
  @Input() abierto: boolean = false;
  @Output() cambiarEstadoApertura = new EventEmitter();
  descripcion: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(cambio: SimpleChanges) {
    if (cambio['pokemon'] && !cambio['pokemon'].isFirstChange()) {
      this.pokemonService
        .getDescripcion(cambio['pokemon'].currentValue.id)
        .then((res) => {
          this.descripcion = res;
        });
    }
  }

  cambiarAbierto() {
    if (this.pokemon) this.cambiarEstadoApertura.emit();
  }
}
