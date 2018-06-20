import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotasPageComponent } from './pages/notas-page/notas-page.component';
import { BuscaPageComponent } from './pages/busca-page/busca-page.component';

import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { LoginComponent } from './components/login/login.component';
import { CartaoComponent } from './components/cartao/cartao.component';
import { CartaoOpcoesComponent } from './components/cartao-opcoes/cartao-opcoes.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    HomePageComponent,
    NavbarComponent,
    NotasPageComponent,
    BuscaPageComponent,
    LoginComponent,
    CartaoComponent,
    CartaoOpcoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlashMessagesModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
