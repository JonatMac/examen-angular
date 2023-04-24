import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  nombre = 'Jonathan';
  apellido = 'Macías';

  constructor(private ruta: Router){
  }
  ngOnInit(): void {
    console.log('PRUEBA INICIO');
  }
}
