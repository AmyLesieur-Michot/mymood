import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { adminAuthedGuard, notAuthedGuard } from './components/auth-guard/auth-guard.guard';

export const routes: Routes = [
    { // Login page route
        path: '',
        canActivate: [
            notAuthedGuard,
        ],
        component: LoginPageComponent,
    },
    { // Admin panel route
        path: 'admin',
        canActivate: [
            adminAuthedGuard,
        ],
        component: AdminPageComponent,
    }
];
