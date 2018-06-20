import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then((response) => {
      this.router.navigate(['/notas']);
    })
    .catch((error) => {
      let mensagem: string;

      switch(error.code) {
        case 'auth/argument-error':
          mensagem = 'É necessário informar o usuário e senha.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          mensagem = 'Não foi encontrado nenhum usuário com os dados informados.';
          break;
        default:
          console.log(error);
          mensagem = 'Erro ao fazer login, tente novamente.';
      }

      this.flashMessage.show(mensagem, {cssClass: 'alert alert-danger', timeout: 4000});
    });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then((response) => {
      this.router.navigate(['/notas']);
    })
    .catch((error) => {
      let mensagem: string = 'Ocorreu um erro ao logar, tente novamente.';
      if(error.code == 'auth/account-exists-with-different-credential') {
        mensagem = 'O email ' + error.email + ' pertence a uma conta associada a outro serviço de login.'
      }

      this.flashMessage.show(mensagem, {cssClass: 'alert alert-danger', timeout: 4000});
    });
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
    .then((response) => {
      this.router.navigate(['/notas']);
    })
    .catch((error) => {
      let mensagem: string = 'Ocorreu um erro ao logar, tente novamente.';
      if(error.code == 'auth/account-exists-with-different-credential') {
        mensagem = 'O email ' + error.email + ' pertence a uma conta associada a outro serviço de login.'
      }

      this.flashMessage.show(mensagem, {cssClass: 'alert alert-danger', timeout: 4000});
    });
  }

  onClickTwitterLogin() {
    this.authService.loginTwitter()
    .then((response) => {
      this.router.navigate(['/notas']);
    })
    .catch((error) => {
      let mensagem: string = 'Ocorreu um erro ao logar, tente novamente.';
      if(error.code == 'auth/account-exists-with-different-credential') {
        mensagem = 'O email ' + error.email + ' pertence a uma conta associada a outro serviço de login.';
      }

      this.flashMessage.show(mensagem, {cssClass: 'alert alert-danger', timeout: 4000});
    });
  }

  onClickRecuperarSenha() {
    this.authService.resetPassword(this.email)
    .then((event) => {
      this.flashMessage.show('Uma mensagem para redefinição de senha foi enviado ao seu e-mail.', {cssClass: 'alert alert-success', timeout: 4000});
    })
    .catch((error) => {
      let mensagem: string;
      switch(error.code) {
        case 'auth/argument-error':
          mensagem = 'É necessário informar o e-mail.';
          break;
        case 'auth/invalid-email':
          mensagem = 'O e-maild informado não é válido.';
          break;
        case 'auth/user-not-found':
          mensagem = 'Não foi encontrado nenhum usuário com o email informado.';
          break;
        default:
          mensagem = 'Não foi possível redefinir a senha, tente novamente.'; console.log(error.code);
          
      }
      this.flashMessage.show(mensagem, {cssClass: 'alert alert-danger', timeout: 4000});
      
    });
  }

}
