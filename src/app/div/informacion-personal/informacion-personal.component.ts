import { Component, OnInit} from '@angular/core';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit{
  datosPersonales: any;

  constructor(private miServices:DatosPersonalesService){

  }
  ngOnInit(): void {
    this.miServices.obtenerDatosPersonales().subscribe(
      data => {console.log(data);
      this.datosPersonales=data["DatosPersonales"]
    },

    )
  }
 
}
