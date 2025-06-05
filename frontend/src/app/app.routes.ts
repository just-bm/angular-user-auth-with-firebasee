import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { UserLogin } from './user-login/user-login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'login', component: UserLogin
    },
    {
        path: 'register', component: Register
    },
    {
        path: 'dashboard', component: Dashboard, canActivate: [authGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
