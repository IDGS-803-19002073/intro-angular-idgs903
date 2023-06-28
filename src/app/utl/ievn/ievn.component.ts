import { Component } from '@angular/core';
import { IAlumnos } from '../alumnos';

@Component({
  selector: 'app-ievn',
  templateUrl: './ievn.component.html',
  styleUrls: ['./ievn.component.css']
})
export class IevnComponent {

  // alumnos: any[] = []
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImagen():void{
  this.muestraImg=!this.muestraImg;
}

  alumnos:IAlumnos[]=[
    {
      "matricula":123,
      "nombre":"Karin Benzema",
      "edad":20,
      "correo":"leo_fcleon@hotmail.com",
      "pago":123.456,
      "foto":"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQPDBfQrcy5A56CdiOArFbV43e93fmqZOKdH_owpFsqvQJBDeS0X81N4aNUENzVOGdxxOrkkHQ3joji9_U"
      ,"calif":9
    },
    {
      "matricula":333,
      "nombre":"Haaland",
      "edad":20,
      "correo":"mbappe_fcparissaintgerman@hotmail.com",
      "pago":1239.42,
      "foto":"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQPDBfQrcy5A56CdiOArFbV43e93fmqZOKdH_owpFsqvQJBDeS0X81N4aNUENzVOGdxxOrkkHQ3joji9_U",
      "calif":6

    }
    
  ]
}
