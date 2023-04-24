import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IDataPokemon } from 'src/app/interfaces/pokemonInterface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})
export class PantallaExamenComponent implements OnInit{
  listPokemon: IDataPokemon[] = [];
  columnTabla: any;
  loading = false;
  constructor(private rutas: Router,
              private pokemonService: PokemonService,
              private mensajes: MessageService){
  }
  ngOnInit(): void {
    this.iniColumnaTabla();
    console.log('PRUEBA PANTALLA EXAMEN');
    this.loading = true;
    this.pokemonService.getAllPokemon().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listPokemon = datos.results;
          this.loading = false;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },error: (err) => {
          console.log(err);
          this.loading = false;
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
    )
  }
  
  iniColumnaTabla(){
    this.columnTabla = [ 
      {
        field: 'name', header: 'Nombre Pokemon'
      },
      {
        field: 'url', header: 'Url Imagen Pokemon'
      }
     ]
  }
}
