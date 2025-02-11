import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CreateFormComponent } from './features/create-form/create-form.component';
import { FormularioComponent } from './features/formulario/formulario.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'formulario/:id', component: FormularioComponent},
    {path: 'criar-formulario', component: CreateFormComponent},
];
