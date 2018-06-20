import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NotasPageComponent } from './pages/notas-page/notas-page.component';
import { BuscaPageComponent } from './pages/busca-page/busca-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
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
