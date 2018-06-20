import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }
  
  ngOnInit() {
  }
  
  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then( (response) => {
      this.flashMessage.show('Cadastro reaizado com sucesso, comece agora mesmo a inserir suas notas.', {cssClass: 'alert alert-success', timeout: 4000});
      this.router.navigate(['/notas']);
    }).catch( (error) => {
      let mensagem: string;

      switch(error.code) {
        case 'auth/argument-error':
          mensagem = 'É necessário informar o e-mail e a senha.';
          break;
        case 'auth/invalid-email':
          mensagem = 'O e-mail informado não é válido.';
          break;
        case 'auth/weak-password':
          mensagem = 'Sua senha deve conter ao menos 6 caracteres.';
          break;
        case 'auth/email-already-in-use':
          mensagem = 'Já existe uma conta cadastrada com o e-mail informado.';
          break;
        default:
          console.log(error);          
          mensagem = 'Erro ao fazer o cadastro, tente novamente.';
      }

      this.flashMessage.show(mensagem, {cssClass: 'alert alert-danger', timeout: 4000});
    });
  }

}
