import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  public returnUrl: string;
  public alertMsg: string;

  constructor(private authSvc: AuthService, private router: Router, private route: ActivatedRoute) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
    // Get the query params
    this.route.queryParams
    .subscribe(params => this.returnUrl = params['return'] || '/');
  }

  handleLogin() {
    console.log('Success will navigate to: ', this.returnUrl);

    const loginResult = this.authSvc.login({ email: this.email, password: this.password });

    if (loginResult.success) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.alertMsg = loginResult.error;
    }
  }
}
