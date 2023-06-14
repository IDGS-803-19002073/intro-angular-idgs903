import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs903';

  nombre = 'Juan';
  alumnos={
    matricula:19002073,
    nombre:'Juan',
    fechaNacimiento: new Date(),
    pago:123.5
  }
  duplicarse(valor: number):number{
    return valor * 3
  }
}
