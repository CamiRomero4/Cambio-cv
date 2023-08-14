import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformacionPersonalComponent } from './div/informacion-personal/informacion-personal.component';
import { PerfilProfesionalComponent } from './fieldset/perfil-profesional/perfil-profesional.component';
import { EducacionComponent } from './fieldset/educacion/educacion.component';
import { ProyectosComponent } from './fieldset/proyectos/proyectos.component';
import { HabilidadesComponent } from './fieldset/habilidades/habilidades.component';
import { ContactoComponent } from './footer/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    InformacionPersonalComponent,
    PerfilProfesionalComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
