import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PantallaExamenComponent } from './pages/pantalla-examen/pantalla-examen.component';


const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent },
    { path: 'Pantalla-Examen', component: PantallaExamenComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ], exports: [RouterModule]
})
export class AppRoutingModule {}