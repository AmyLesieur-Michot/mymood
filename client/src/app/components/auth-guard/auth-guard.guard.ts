import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export const authGuardGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  try {
    const user = await lastValueFrom(auth.currentLoggedUser());

    if (user.student) {
      return true;
    } else {
      router.navigate([user.admin ? 'admin' : 'supervisor']);
      return false;
    }
  } catch (err) {
    router.navigate(['/']);
    return false;
  }
};

// 🔹 Guard pour les superviseurs
export const supervisorGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  try {
    const user = await lastValueFrom(auth.currentLoggedUser());

    if (user.supervisor) {
      return true;
    } else {
      router.navigate([user.admin ? 'admin' : 'student']);
      return false;
    }
  } catch (err) {
    router.navigate(['/']);
    return false;
  }
};

// 🔹 Guard pour les admins
export const adminAuthedGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  try {
    const user = await lastValueFrom(auth.currentLoggedUser());

    if (user.admin) {
      return true;
    } else {
      router.navigate([user.supervisor ? 'supervisor' : 'student']);
      return false;
    }
  } catch (err) {
    router.navigate(['/']);
    return false;
  }
};

// 🔹 Guard pour s'assurer que l'utilisateur est déconnecté avant d'accéder à la page de connexion
export const notAuthedGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  try {
    const user = await lastValueFrom(auth.currentLoggedUser());

    if (user.admin) {
      router.navigate(['admin']);
    } else if (user.supervisor) {
      router.navigate(['supervisor']);
    } else {
      router.navigate(['student']);
    }

    return false;
  } catch (err) {
    return true; // L'utilisateur est bien déconnecté, on le laisse accéder
  }
};



