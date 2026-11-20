import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  email = 'fabrizio@gmail.com';
  password = '';
  readonly error = signal('');

  submit(): void {
    this.error.set('');
    if (!this.email.trim() || !this.password) {
      this.error.set('Completa tu correo electrónico y contraseña.');
      return;
    }
    if (!this.auth.login(this.email, this.password)) {
      this.error.set('El correo electrónico o la contraseña son incorrectos.');
      return;
    }
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    void this.router.navigateByUrl(returnUrl?.startsWith('/') && !returnUrl.startsWith('//') ? returnUrl : '/');
  }
}
