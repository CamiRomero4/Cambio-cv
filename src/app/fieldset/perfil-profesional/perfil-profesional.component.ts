import { Component, OnInit } from '@angular/core';
import { PerfilProfesionalService } from 'src/app/services/perfil-profesional.service';

@Component({
  selector: 'app-perfil-profesional',
  templateUrl: './perfil-profesional.component.html',
  styleUrls: ['./perfil-profesional.component.css']
})
export class PerfilProfesionalComponent implements OnInit{
  PerfilProfesional: any;
  constructor(private miServices: PerfilProfesionalService){

  }
  ngOnInit():void {
    this.miServices.obtenerPerfilProfesional().subscribe(
      data=>{console.log(data);
        this.PerfilProfesional=data["PerfilProfesional"]
      },
    )
  }

}
