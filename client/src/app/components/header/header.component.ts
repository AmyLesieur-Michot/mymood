import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() // Current logged shown firmname
  first_name: string = 'Loading...';
  @Input() // Is the current logged user is an admin
  admin: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  // Logs-out the user and navigate to the login page
  disconnect() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
