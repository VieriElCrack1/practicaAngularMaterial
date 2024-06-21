import { Component } from '@angular/core';
import { ModuleModule } from '../../angular-module/module/module.module';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ModuleModule, DatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service : AuthService, private router : Router) {}

  fecha = new Date();

  logueo(usuario: HTMLInputElement, password: HTMLInputElement) {
    this.service.login(usuario.value, password.value);
    this.router.navigateByUrl("/dashboard");
  }
}
