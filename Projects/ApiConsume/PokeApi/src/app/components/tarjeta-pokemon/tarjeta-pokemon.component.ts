import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Resultado } from '../../interfaces/pokeApi';
import { Pokemon, Species } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/api.service';
import { NgClass, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.css'],
  imports: [NgIf, NgClass, TitleCasePipe],
})
export class TarjetaPokemonComponent implements OnChanges {
  constructor(private pokemon: PokemonService) {}
  ngOnChanges(): void {
    this.extraerDatos();
  }

  @Input() fullData: Pokemon | undefined;
  @Input() data: Resultado | undefined;
  @Input() seleccionado: boolean = false;
  @Output() clicked = new EventEmitter<Pokemon>();
  id: string = '0';

  selected() {
    if (this.fullData) this.clicked.next(this.fullData);
  }

  extraerDatos() {
    if (this.data && !this.fullData) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemon.getById(this.id).then((res) => (this.fullData = res));
      return;
    }
    if (this.fullData) {
      this.id = this.fullData.species.url.substring(
        42,
        this.fullData.species.url.length - 1
      );
      this.data = { name: this.fullData.species.name, url: '' };
    }
  }
}
