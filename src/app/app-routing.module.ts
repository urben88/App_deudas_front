import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './pages/auth/components/register/register.component';



// Define las rutas de tu aplicación
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'auth',component:AuthComponent,
  children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
  ]},
  { path: '**', redirectTo: ''},

  // Puedes agregar más rutas aquí según tu aplicación
  // Por ejemplo, rutas con parámetros: { path: 'users/:id', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }