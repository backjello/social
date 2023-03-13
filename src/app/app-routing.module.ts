import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfiloComponent } from './pages/profilo/profilo.component';

const routes: Routes = [ // tutte le 'pagine' disponibili nel sito
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'profilo/:id', // id rappresenta appunto l'id della persona della quale vogliamo caricare il profilo
    component:ProfiloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
