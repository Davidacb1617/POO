import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { PokeApiService } from '../../services/poke-api.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Result } from '../../interfaces/PokeApi';
import { NgStyle } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [PokemonComponent, NzGridModule, NzCardModule, NgStyle],
})
export class WelcomeComponent implements OnInit {
  listaPokemon: Result[] = [];
  page: number = 1;

  constructor(private apiService: PokeApiService) {}
  ngOnInit() {
    this.cargarLista();
  }

  cargarLista() {
    this.apiService.getPokemonPage(this.page).subscribe((data: any) => {
      this.listaPokemon = data.results;
      console.log(this.listaPokemon);
    });
  }
}
