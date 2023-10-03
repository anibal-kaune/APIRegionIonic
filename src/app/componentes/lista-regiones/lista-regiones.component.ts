import { Component, OnInit } from '@angular/core';
import { DatosRegionalesService } from 'src/app/servicios/datos-regionales.service';

@Component({
  selector: 'app-lista-regiones',
  templateUrl: './lista-regiones.component.html',
  styleUrls: ['./lista-regiones.component.scss'],
})
export class ListaRegionesComponent  implements OnInit {

  regiones:any[] = [];

  constructor(private datosRegionales: DatosRegionalesService) { }

  ngOnInit() {
    this.obtenerRegiones();
  }

  obtenerRegiones(){
    this.datosRegionales.obtenerRegiones().subscribe(
      (data)=>{
        this.regiones = data.data;
      },
      (error)=>{
        console.error('Error al obtener las regiones',error);
      }
    )
  }

}
