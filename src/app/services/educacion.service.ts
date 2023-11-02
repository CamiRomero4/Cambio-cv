import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }
  obtenerEducacion(): Observable <any>
  {
    console.log("el servicio fue invocado");
    return this.http.get("./assets/datos.json");
  }
}
