import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IPokemon } from '../interfaces/pokemonInterface';

const API_GET_ALL_POKEMON = environment.API_GET_ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get<IPokemon>(API_GET_ALL_POKEMON);
  }
}
