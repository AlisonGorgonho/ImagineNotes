import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean;
  public userName: string;
  public userEmail: string;
  public userPhoto: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe( auth => {
      if(auth) {
        this.isLogged = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
        this.userPhoto = auth.photoURL;
      } else {
        this.isLogged = false;
      }
    })
  }

  onClickLogout() {
    this.authService.logout();
    // .then((response) => {
    //   this.router.navigate(['/']);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
  }

}
