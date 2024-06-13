import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { Result } from '../interfaces/PokeApi';
@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private httpClient: HttpClient) {}

  getPokemonPage(offset: number, limit: number = 30): Observable<Result> {
    const page = limit * (offset - 1);
    console.log(page);
    return this.httpClient.get<Result>(
      `${this.pokeApiUrl}?offset=${page}&limit=${limit}`
    );
  }

  getById(id: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.pokeApiUrl}${id}`);
  }
}
