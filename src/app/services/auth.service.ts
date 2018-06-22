import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(data) {
    if (data.email === 'user' && data.password === 'pass') {
      localStorage.setItem('user', JSON.stringify(data));
      return {success: true, data};
    }

    return { success: false, data, error: 'Wrong user / password!' };
  }

  logout() {
    localStorage.removeItem('user');
    return {success: true};
  }

  isTokenExpired() {
    return true;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated() {
    return !(this.getUser() === null);
  }
}
