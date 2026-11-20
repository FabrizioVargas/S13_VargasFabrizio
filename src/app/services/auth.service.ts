import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

const SESSION_KEY = 'tienda-auth-session';
const DEMO_EMAIL = 'fabrizio@gmail.com';
const DEMO_PASSWORD = '12345678';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly session = signal(this.readSession());

  constructor(private readonly router: Router) {}

  isLoggedIn(): boolean {
    return this.session();
  }

  login(email: string, password: string): boolean {
    if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) return false;
    this.session.set(true);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: DEMO_EMAIL, authenticated: true }));
    return true;
  }

  logout(): void {
    localStorage.removeItem(SESSION_KEY);
    this.session.set(false);
    void this.router.navigate(['/login']);
  }

  private readSession(): boolean {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) ?? 'null')?.authenticated === true;
    } catch {
      return false;
    }
  }
}
