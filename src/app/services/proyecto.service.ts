import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

  obtenerProyecto(): Observable <any>
  {
    console.log(" el servicio fue iniciado");
    return this.http.get("./assets/datos.json")
  }
}
