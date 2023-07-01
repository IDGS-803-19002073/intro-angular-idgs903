import { RouterModule,Routes } from "@angular/router";
import {NgModule} from "@angular/core";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";
import { IevnComponent } from "./utl/ievn/ievn.component";

const routes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'IEVN',component:IevnComponent},
    {path:'Formulario',component: AlumnoReactiveComponent},
    // {path:'**',component: PagenotfoundComponent}


]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}