import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  Proyecto: any;

  constructor(private miServices:ProyectoService){

  }
ngOnInit(): void {
    this.miServices.obtenerProyecto().subscribe(
      data=>{console.log(data);
      this.Proyecto=data["Proyecto"]
    },
    )
}
}
