import { Component } from '@angular/core';

@Component({
  selector: 'app-ievn',
  templateUrl: './ievn.component.html',
  styleUrls: ['./ievn.component.css']
})
export class IevnComponent {

  // alumnos: any[] = []
  alumnos:any[]=[
    {
      "matricula":123,
      "nombre":"Karin Benzema",
      "edad":20,
      "correo":"leo_fcleon@hotmail.com",
      "pago":123.456,
      "foto":"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQPDBfQrcy5A56CdiOArFbV43e93fmqZOKdH_owpFsqvQJBDeS0X81N4aNUENzVOGdxxOrkkHQ3joji9_U"

    },
    {
      "matricula":333,
      "nombre":"Haaland",
      "edad":20,
      "correo":"mbappe_fcparissaintgerman@hotmail.com",
      "pago":1239.42,
      "foto":"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQPDBfQrcy5A56CdiOArFbV43e93fmqZOKdH_owpFsqvQJBDeS0X81N4aNUENzVOGdxxOrkkHQ3joji9_U"
    }
    
  ]
}