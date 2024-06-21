import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { Ejericico1Component } from './dashboard/ejericico1/ejericico1.component';
import { Ejericico2Component } from './dashboard/ejericico2/ejericico2.component';
import { NotFundComponent } from './not-fund/not-fund.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent, 
        canActivate: [authGuard],
        children: [
            {path: "ejercicio1", component: Ejericico1Component},
            {path: "ejercicio2", component: Ejericico2Component}
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: NotFundComponent}
];
