import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilProfesionalService {

  constructor(private http:HttpClient) { }
  obtenerPerfilProfesional(): Observable <any>
  {
    console.log("el servicio fue invocado");
    return this.http.get("./assets/datos.json");
  }
}
