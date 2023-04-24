import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})
export class PantallaExamenComponent implements OnInit{
  constructor(private rutas: Router){

  }
  ngOnInit(): void {
    console.log('PRUEBA PANTALLA EXAMEN');
  }
  
}
