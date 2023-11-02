import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private http:HttpClient) { }

 obtenerDatosPersonales(): Observable <any>
 {
  console.log("el servicio fue invocado");
  return this.http.get("./assets/datos.json");
 }

}
