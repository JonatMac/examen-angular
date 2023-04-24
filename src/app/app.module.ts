import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './pages/pantalla-examen/pantalla-examen.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent,
    InicioComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
