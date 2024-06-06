import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from '../../interfaces/pokeApi';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/api.service';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [
    FotoPokemonComponent,
    TarjetaPokemonComponent,
    DetalleComponent,
    NgIf,
    NgClass,
    NgFor,
  ],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  constructor(private pokemon: PokemonService) {}
pokemons: any;
  listaPokemons: Resultado[] = [];
  pokemonSeleccionado: Pokemon | undefined;
  pagina: number = 1;
  cargando: boolean = false;
  aperturaDetalle: boolean = false;

  ngOnInit(): void {
    this.cargarLista();

  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  async cargarLista() {
    if (this.cargando) return;
    this.cargando = true;
    this.listaPokemons = [
      ...this.listaPokemons,
      ...(await this.pokemon.getByPage(this.pagina)),
    ];
    this.pagina++;
    this.cargando = false;
  }

  onScroll(e: any) {
    if (
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight +
          this.tarjetasElement.nativeElement.scrollTop
      ) === e.srcElement.scrollHeight
    ) {
      this.cargarLista();
    }
  }

  tarjetaClickeada(e: Pokemon) {
    if (this.pokemonSeleccionado?.name === e.name)
      return (this.aperturaDetalle = !this.aperturaDetalle);
    return (this.pokemonSeleccionado = e);
  }
}
