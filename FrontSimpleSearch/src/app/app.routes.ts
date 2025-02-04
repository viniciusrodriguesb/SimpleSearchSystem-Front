import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CreateFormComponent } from './features/create-form/create-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: CreateFormComponent},
];
