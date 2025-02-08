import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  first_names: string[] = [];
  first_name: string = '';
  password: string = '';
  in_error: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      this.authService.getFirstNames().subscribe((first_names) => this.first_names = first_names);
  }

  tryLogin() {
    this.authService.login(this.first_name, this.password).subscribe({
      next: (user) => {
        if (user.admin) {
          this.router.navigate(['admin']);
        } else if (user.supervisor) {
          this.router.navigate(['supervisor']);
        } else if (user.student) {
          this.router.navigate(['student']);
        } else {
          this.router.navigate(['unauthorized']);
        }
      },
      error: () => {
        this.in_error = true;
        setTimeout(() => this.in_error = false, 5000);
      }
    });
  }
}
