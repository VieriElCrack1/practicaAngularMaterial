import { Component } from '@angular/core';
import { ModuleModule } from '../../angular-module/module/module.module';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ModuleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service : AuthService, private router : Router) {}

  logueo(usuario: HTMLInputElement, password: HTMLInputElement) {
    this.service.login(usuario.value, password.value);
    this.router.navigateByUrl("/dashboard");
  }
}
