import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.initForm();
  }

  onSubmit():void {
    // console.log('Form-> ', this.alumnoForm.value);
    this.obtenerValores();
  }
  obtenerValores():void{
    const mat= this.alumnoForm.get('matricula')?.value;
    const no= this.alumnoForm.get('nombre')?.value;
    console.log('matricula: ', mat);
    console.log('nombre: ', no);
  }

  initForm(): FormGroup {
    return this.fb.group({
      matricula: ['',[Validators.required]],
      nombre: ['',[Validators.required,Validators.minLength(3)]],
      edad: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      correo: [''],
      pago: [''],
      foto: [''],
      calificacion: [''],
    });
  }
}
