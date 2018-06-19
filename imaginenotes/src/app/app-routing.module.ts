import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { NotasPageComponent } from './componentes/notas-page/notas-page.component';
import { BuscaPageComponent } from './componentes/busca-page/busca-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registrar', component: RegisterPageComponent},
  {path: 'notas', component: NotasPageComponent, canActivate: [AuthGuard]},
  {path: 'busca', component: BuscaPageComponent, canActivate: [AuthGuard]},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
